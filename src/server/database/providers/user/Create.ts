import { Knex } from "../../knex";
import { IUser } from "../../models";
import { ETableNames } from "../../ETableNames";

export const create = async (user: Omit<IUser, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex(ETableNames.user).insert(user).returning('id');


        if (typeof result === 'object') {
            return result.id;
        } else if (typeof result === 'number') {
            return result;
        }
        return Error('Erro ao cadastrar Usuário');
    } catch (error) {
        console.log(error)
        return Error('Erro ao cadastrar');
    }

}