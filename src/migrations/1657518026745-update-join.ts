import { MigrationInterface, QueryRunner } from "typeorm";

export class updateJoin1657518026745 implements MigrationInterface {
    name = 'updateJoin1657518026745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_affbc9a9a22aa18f40b1bf7a9b3"`);
        await queryRunner.query(`ALTER TABLE "client" RENAME COLUMN "transactions_id" TO "transactionsId"`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_aed4d4a43bf2af8c4650e7d07c1" FOREIGN KEY ("transactionsId") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_aed4d4a43bf2af8c4650e7d07c1"`);
        await queryRunner.query(`ALTER TABLE "client" RENAME COLUMN "transactionsId" TO "transactions_id"`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_affbc9a9a22aa18f40b1bf7a9b3" FOREIGN KEY ("transactions_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
