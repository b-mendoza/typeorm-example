import { MigrationInterface, QueryRunner } from "typeorm";

export class mtmClientBanker1657518888244 implements MigrationInterface {
    name = 'mtmClientBanker1657518888244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bankers_clients" ("banker_id" uuid NOT NULL, "client_id" uuid NOT NULL, CONSTRAINT "PK_6500fceda22f607220b66e89814" PRIMARY KEY ("banker_id", "client_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0468938be4ff5499cc2ac74304" ON "bankers_clients" ("banker_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_5625fb6c80823139c092f8db2c" ON "bankers_clients" ("client_id") `);
        await queryRunner.query(`ALTER TABLE "bankers_clients" ADD CONSTRAINT "FK_0468938be4ff5499cc2ac743046" FOREIGN KEY ("banker_id") REFERENCES "banker"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "bankers_clients" ADD CONSTRAINT "FK_5625fb6c80823139c092f8db2ca" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bankers_clients" DROP CONSTRAINT "FK_5625fb6c80823139c092f8db2ca"`);
        await queryRunner.query(`ALTER TABLE "bankers_clients" DROP CONSTRAINT "FK_0468938be4ff5499cc2ac743046"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5625fb6c80823139c092f8db2c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0468938be4ff5499cc2ac74304"`);
        await queryRunner.query(`DROP TABLE "bankers_clients"`);
    }

}
