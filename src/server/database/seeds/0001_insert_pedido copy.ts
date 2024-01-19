import { Knex } from "knex";
import { ETableNames } from "../ETableNames";





export const seed = async (knex: Knex) => {

    const pedidosSeedOne = [
        {
            info: "pedido number 1",
            total: 305.20,
            discount: 90,
            status: "string",
        },
        // { info: 'Pedido 1', total: 41.22, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 1', total: 41.22, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 1', total: 41.22, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 2', total: 86.75, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 3', total: 13.50, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 4', total: 94.70, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 5', total: 31.79, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 6', total: 78.87, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 7', total: 41.40, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 8', total: 86.70, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 9', total: 57.90, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 10', total: 71.08, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 11', total: 94.49, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 12', total: 41.20, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 13', total: 54.70, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 14', total: 34.05, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 15', total: 47.83, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 16', total: 72.05, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 17', total: 95.98, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 18', total: 102.54, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 19', total: 47.61, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 20', total: 44.86, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 21', total: 40.06, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 22', total: 69.58, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 23', total: 72.90, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 24', total: 44.57, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 25', total: 34.14, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 26', total: 93.11, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 27', total: 71.24, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 28', total: 107.9, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 29', total: 64.57, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 30', total: 72.19, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 31', total: 67.25, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 32', total: 68.69, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 33', total: 36.80, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 34', total: 82.04, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 35', total: 11.37, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 36', total: 73.08, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 37', total: 17.45, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 38', total: 64.10, status: 'sumaryteste', discount: 20, },
        // { info: 'Pedido 39', total: 100.72, status: 'sumaryteste', discount: 20, },
    ]

    const [{ count }] = await knex(ETableNames.pedido).count<[{ count: number }]>('* as count');

    if (!Number.isInteger(count) || Number(count) > 0) return;
    const pedidoToInsert = pedidosSeedOne.map(datePedido => ({
        info: datePedido.info,
        total: datePedido.total,
        status: datePedido.status,
        discount: datePedido.discount
    }))
    await knex(ETableNames.pedido).insert(pedidoToInsert)



}; 