import { Knex } from "../../knex";
import { IUser } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getAll = async (page: number, limit: number, filter: string): Promise < IUser[] | Error> => {
    try {
        const result = await Knex(ETableNames.user)
            .select('*')
            .where('name', 'like', `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit);


        if (result) return result
        return new Error('ID não encontrado do usuario');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }

}