import { Knex } from "../../knex";
import { IPedido } from "../../models";
import { ETableNames } from "../../ETableNames";

export const updateById = async (id: number, pedido: Omit<IPedido, 'id'>): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.pedido).where('id', '=', id).update(pedido)

        if (result > 0) return;

        return new Error('Erro ao atualizar o registro.')

    } catch (error) {
        console.log(error)
        return Error('Erro ao deletar');
    }

}