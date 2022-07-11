import { MigrationInterface, QueryRunner } from "typeorm";

export class createClientTransactionRelation1657517303797 implements MigrationInterface {
    name = 'createClientTransactionRelation1657517303797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" ADD "client_id" uuid`);
        await queryRunner.query(`ALTER TABLE "client" ADD "transactionsId" uuid`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_3e4cf3f31643825f80f28f929e2" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_aed4d4a43bf2af8c4650e7d07c1" FOREIGN KEY ("transactionsId") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_aed4d4a43bf2af8c4650e7d07c1"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_3e4cf3f31643825f80f28f929e2"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "transactionsId"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "client_id"`);
    }

}
