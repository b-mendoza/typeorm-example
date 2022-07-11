import { MigrationInterface, QueryRunner } from "typeorm";

export class addClientProperties1657513820668 implements MigrationInterface {
    name = 'addClientProperties1657513820668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_cf949d05e49c4ad2dbedfffef4a"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "cardNumber"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "first_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "last_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "card_number" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_bc0c644bf2e06d38466b66ecd66" UNIQUE ("card_number")`);
        await queryRunner.query(`ALTER TABLE "client" ADD "is_active" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "client" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "client" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "is_active"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "UQ_bc0c644bf2e06d38466b66ecd66"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "card_number"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "client" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "client" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "client" ADD "cardNumber" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "UQ_cf949d05e49c4ad2dbedfffef4a" UNIQUE ("cardNumber")`);
        await queryRunner.query(`ALTER TABLE "client" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD "firstName" character varying NOT NULL`);
    }

}
