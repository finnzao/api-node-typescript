import { Knex } from "../../knex";
import { IPedido } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getAll = async (page: number, limit: number, filter: string, id = 0): Promise<IPedido[] | Error> => {
    try {
        const result = await Knex(ETableNames.pedido)
            .select('*')
            .where('info', 'like', `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit);


        if (result) return result
        return new Error('ID não encontrado');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }

}