import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
    return knex.schema.createTable(ETableNames.pedido, table => {
        table.bigIncrements('id').primary().index();
        table.string('info', 500).index().notNullable();
        table.float('total', 10).index().notNullable();
        table.float('discount', 10).index().notNullable();
        table.string('status', 10).index().notNullable();
        table.bigInteger('userId').unique().references('id').inTable(ETableNames.produto).onUpdate('CASCADE').onDelete('SET NULL');
        table.comment('Tabela usada para armazena pedidos no sistema ')
    }).then(() => {
        console.log(`Create table ${ETableNames.pedido}`)
    });
}
/*

*/
export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.pedido).then(() => {
        console.log(`Delete table ${ETableNames.pedido}`)
    });;
}

