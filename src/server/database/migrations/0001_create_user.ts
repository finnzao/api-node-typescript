import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
    return knex.schema.createTable(ETableNames.user, table => {
        table.bigIncrements('id').primary().index();
        table.string('name', 150).index().notNullable();
        table.float('price', 10).index().notNullable();
        table.string('img').index().notNullable();

        table.comment('Tabela usada para armazena produtos no sistema ')
    }).then(() => {
        console.log(`Create table ${ETableNames.user}`)
    });
}
/*

*/
export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.user).then(() => {
        console.log(`Delete table ${ETableNames.user}`)
    });;
}

