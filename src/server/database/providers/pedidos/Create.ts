import { Knex } from "../../knex";
import { IPedido } from "../../models";
import { ETableNames } from "../../ETableNames";

export const create = async (pedido: Omit<IPedido, 'id'>) => {
    try {
        const [result] = await Knex(ETableNames.pedido).insert(pedido).returning('id');


        if (typeof result === 'object') {
            return result.id;
        } else if (typeof result === 'number') {
            return result;
        }
        return Error('Erro ao cadastrar');
    } catch (error) {
        console.log(error)
        return Error('Erro ao no banco de dados');
    }

}