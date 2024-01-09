import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
    return knex.schema.createTable(ETableNames.user, table => {
        table.bigIncrements('id').primary().index();
        table.string('name').index().checkLength('>=', 3);
        table.string('mobile').index().notNullable().checkLength('>=', 8);
        table.string('email').index().notNullable().checkLength('>=', 6);
        table.string('password').index().notNullable().checkLength('>=', 6);
        table.boolean('admin').defaultTo(false);
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

