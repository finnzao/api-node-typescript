import { Knex } from "../../knex";
import { IProduto } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getAll = async (page: number, limit: number, filter: string, id = 0): Promise<IProduto[] | Error> => {
    try {
        const result = await Knex(ETableNames.produto)
            .select('*')
            .where('name', 'like', `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit);


        if (result) return result
        return new Error('ID não encontrado');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }

}