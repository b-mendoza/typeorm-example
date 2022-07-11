import { MigrationInterface, QueryRunner } from "typeorm";

export class addBankerEntity1657514701358 implements MigrationInterface {
    name = 'addBankerEntity1657514701358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "banker" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "card_number" character varying(10) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "country" character varying NOT NULL, "phone" character varying(10) NOT NULL, CONSTRAINT "UQ_c1944a58f7ecf3afbfe23173723" UNIQUE ("email"), CONSTRAINT "UQ_8069c792f02262882252b843491" UNIQUE ("card_number"), CONSTRAINT "PK_3b517d2449b13a1a9b41c949e3a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "banker"`);
    }

}
