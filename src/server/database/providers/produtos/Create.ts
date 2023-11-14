import { Knex } from "../../knex";
import { IProduto } from "../../models";
import { ETableNames } from "../../ETableNames";

export const create = async (produto: Omit<IProduto, 'id'>) => {
    try {
        const [result] = await Knex(ETableNames.user).insert(produto).returning('id');


        if (typeof result === 'object') {
            return result.id;
        } else if (typeof result === 'number') {
            return result;
        }
        return Error('Erro ao cadastrar');
    } catch (error) {
        console.log(error)
        return Error('Erro ao cadastrar');
    }

}