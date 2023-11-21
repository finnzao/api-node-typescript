import { Knex } from "../../knex";
import { IPedido } from "../../models";
import { ETableNames } from "../../ETableNames";

export const getById = async (id: number): Promise<IPedido | Error> => {
    try {
        const result = await Knex(ETableNames.pedido).select('*').where('id', '=', id).first();


        if (result) return result
        return new Error('ID não encontrado');
    } catch (error) {
        console.log(error);
        return new Error('Erro consulta');
    }

}