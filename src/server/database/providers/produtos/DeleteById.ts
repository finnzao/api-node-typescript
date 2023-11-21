import { Knex } from "../../knex";
import { IProduto } from "../../models";
import { ETableNames } from "../../ETableNames";
import { number } from "yup";

export const deleteById  = async (id: number): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.produto).where('id', '=', id).del()

        if (result > 0) return;

        return new Error('Erro ao apagar o registro.')

    } catch (error) {
        console.log(error)
        return Error('Erro ao deletar');
    }

}