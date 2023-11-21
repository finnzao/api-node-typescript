import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
    return knex.schema.createTable(ETableNames.produto, table => {
        table.bigIncrements('id').primary().index();
        table.string('name', 150).index();
        table.string('mobile', 15).index().notNullable();
        table.string('email',50).index().notNullable();
        table.string('password',32).index().notNullable();
        table.boolean('admin').index().notNullable().defaultTo(false);
        table.comment('Tabela usada para armazena usuarios no sistema ')
    }).then(() => {
        console.log(`Create table ${ETableNames.produto}`)
    });
}
/*

*/
export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.produto).then(() => {
        console.log(`Delete table ${ETableNames.produto}`)
    });;
}

