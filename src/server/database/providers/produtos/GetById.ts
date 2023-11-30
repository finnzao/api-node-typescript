import { Knex } from "../../knex";
import { IProduto } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getById = async (id: number): Promise<IProduto | Error> => {
    try {
        const result = await Knex(ETableNames.produto).select('*').where('id', '=', id).first();


        if (result) return result
        return new Error('ID não encontrado');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }

}