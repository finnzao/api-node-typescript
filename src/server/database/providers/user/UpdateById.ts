import { Knex } from "../../knex";
import { IUser } from "../../models";
import { ETableNames } from "../../ETableNames";

export const updateById = async (id: number, user: Omit<IUser, 'id'>): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.user).where('id', '=', id).update(user)

        if (result > 0) return;

        return new Error('Erro ao atualizar o registro.')

    } catch (error) {
        console.log(error)
        return Error('rro ao consultar os registros');
    }

}