import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
    return knex.schema.createTable(ETableNames.produto, table => {
        table.bigIncrements('id').primary().index();
        table.string('name', 150).index().notNullable();
        table.float('price', 10).index().notNullable();
        table.string('img').index().notNullable();
        table.string('summary',300).index().notNullable();
        table.decimal('quantity',20).index().notNullable();

        table.comment('Tabela usada para armazena produtos no sistema ')
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

