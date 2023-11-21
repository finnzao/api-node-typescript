import { Knex } from "../../knex";
import { ETableNames } from "../../ETableNames";


export const deleteById = async (id: number): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.user).where('id', '=', id).del()

        if (result > 0) return;

        return new Error('Erro ao consultar usuarios')

    } catch (error) {
        console.log(error)
        return Error('Erro ao deletar');
    }

}