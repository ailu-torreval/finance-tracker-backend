import { MigrationInterface, QueryRunner } from "typeorm";

export class TablesFixed1708437833118 implements MigrationInterface {
    name = 'TablesFixed1708437833118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entry" DROP COLUMN "test"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entry" ADD "test" character varying NOT NULL`);
    }

}
