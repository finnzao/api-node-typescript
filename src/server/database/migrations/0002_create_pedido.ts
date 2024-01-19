import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
    return knex.schema.createTable(ETableNames.pedido, table => {
        table.bigIncrements('id').primary().index();
        table.string('info', 500).index();
        table.float('total', 10).index();
        table.float('discount').index();
        table.string('status', 10).index();
        table.comment('Tabela usada para armazena pedidos no sistema ')
    }).then(() => {
        console.log(`Create table ${ETableNames.pedido}`)
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.pedido).then(() => {
        console.log(`Delete table ${ETableNames.pedido}`)
    });;
}

