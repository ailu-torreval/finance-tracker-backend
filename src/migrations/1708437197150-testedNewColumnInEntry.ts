import { MigrationInterface, QueryRunner } from "typeorm";

export class TestedNewColumnInEntry1708437197150 implements MigrationInterface {
    name = 'TestedNewColumnInEntry1708437197150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entry" ADD "test" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entry" DROP COLUMN "test"`);
    }

}
