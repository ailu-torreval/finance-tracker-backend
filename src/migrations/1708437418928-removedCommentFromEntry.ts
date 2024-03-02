import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovedCommentFromEntry1708437418928 implements MigrationInterface {
    name = 'RemovedCommentFromEntry1708437418928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entry" DROP COLUMN "comment"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entry" ADD "comment" character varying NOT NULL`);
    }

}
