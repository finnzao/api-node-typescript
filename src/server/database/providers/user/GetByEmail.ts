import { Knex } from "../../knex";
import { IUser } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getByEmail = async (email: string): Promise<IUser | Error> => {
    try {
        const result = await Knex(ETableNames.user).select('*').where('email', '=', email).first();

        if (result) return result
        return new Error('ID não encontrado');
    } catch (error) {
        return new Error('Erro consulta registros');
    }

}