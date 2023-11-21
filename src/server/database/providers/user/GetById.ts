import { Knex } from "../../knex";
import { IUser } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getById = async (id: number): Promise<IUser | Error> => {
    try {
        const result = await Knex(ETableNames.user).select('*').where('id', '=', id).first();


        if (result) return result
        return new Error('ID não encontrado');
    } catch (error) {
        console.log(error);
        return new Error('Erro consulta registros');
    }

}