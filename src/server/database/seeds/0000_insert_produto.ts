import { Knex } from "knex";
import { ETableNames } from "../ETableNames";





export const seed = async (knex: Knex) => {

    const produtosSeedOne = [
        { name: 'Produto 0', price: 18.35, img: 'htpp:img' },
        { name: 'Produto 1', price: 41.22, img: 'htpp:img' },
        { name: 'Produto 1', price: 41.22, img: 'htpp:img' },
        { name: 'Produto 1', price: 41.22, img: 'htpp:img' },
        { name: 'Produto 2', price: 86.75, img: 'htpp:img' },
        { name: 'Produto 3', price: 13.50, img: 'htpp:img' },
        { name: 'Produto 4', price: 94.70, img: 'htpp:img' },
        { name: 'Produto 5', price: 31.79, img: 'htpp:img' },
        { name: 'Produto 6', price: 78.87, img: 'htpp:img' },
        { name: 'Produto 7', price: 41.40, img: 'htpp:img' },
        { name: 'Produto 8', price: 86.70, img: 'htpp:img' },
        { name: 'Produto 9', price: 57.90, img: 'htpp:img' },
        { name: 'Produto 10', price: 71.08, img: 'htpp:img' },
        { name: 'Produto 11', price: 94.49, img: 'htpp:img' },
        { name: 'Produto 12', price: 41.20, img: 'htpp:img' },
        { name: 'Produto 13', price: 54.70, img: 'htpp:img' },
        { name: 'Produto 14', price: 34.05, img: 'htpp:img' },
        { name: 'Produto 15', price: 47.83, img: 'htpp:img' },
        { name: 'Produto 16', price: 72.05, img: 'htpp:img' },
        { name: 'Produto 17', price: 95.98, img: 'htpp:img' },
        { name: 'Produto 18', price: 102.54, img: 'htpp:img' },
        { name: 'Produto 19', price: 47.61, img: 'htpp:img' },
        { name: 'Produto 20', price: 44.86, img: 'htpp:img' },
        { name: 'Produto 21', price: 40.06, img: 'htpp:img' },
        { name: 'Produto 22', price: 69.58, img: 'htpp:img' },
        { name: 'Produto 23', price: 72.90, img: 'htpp:img' },
        { name: 'Produto 24', price: 44.57, img: 'htpp:img' },
        { name: 'Produto 25', price: 34.14, img: 'htpp:img' },
        { name: 'Produto 26', price: 93.11, img: 'htpp:img' },
        { name: 'Produto 27', price: 71.24, img: 'htpp:img' },
        { name: 'Produto 28', price: 107.9, img: 'htpp:img' },
        { name: 'Produto 29', price: 64.57, img: 'htpp:img' },
        { name: 'Produto 30', price: 72.19, img: 'htpp:img' },
        { name: 'Produto 31', price: 67.25, img: 'htpp:img' },
        { name: 'Produto 32', price: 68.69, img: 'htpp:img' },
        { name: 'Produto 33', price: 36.80, img: 'htpp:img' },
        { name: 'Produto 34', price: 82.04, img: 'htpp:img' },
        { name: 'Produto 35', price: 11.37, img: 'htpp:img' },
        { name: 'Produto 36', price: 73.08, img: 'htpp:img' },
        { name: 'Produto 37', price: 17.45, img: 'htpp:img' },
        { name: 'Produto 38', price: 64.10, img: 'htpp:img' },
        { name: 'Produto 39', price: 100.72, img: 'htpp:img' },
    ]

    const [{ count }] = await knex(ETableNames.user).count<[{ count: number }]>('* as count');

    if (!Number.isInteger(count) || Number(count) > 0) return;
    const produtosToInsert = produtosSeedOne.map(dateProduto => ({
        name: dateProduto.name,
        price: dateProduto.price,
        img: dateProduto.img
    }))
    await knex(ETableNames.user).insert(produtosToInsert)



}; 