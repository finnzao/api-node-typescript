import { Knex } from "../../knex";
import { IProduto } from "../../models";
import { ETableNames } from "../../ETableNames";

export const updateById = async (id: number, produto: Omit<IProduto, 'id'>): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.produto).where('id', '=', id).update(produto)

        if (result > 0) return;

        return new Error('Erro ao atualizar o registro.')

    } catch (error) {
        console.log(error)
        return Error('Erro ao deletar');
    }

}