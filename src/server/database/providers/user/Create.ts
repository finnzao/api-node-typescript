import { Knex } from "../../knex";
import { IUser } from "../../models";
import { ETableNames } from "../../ETableNames";
import { PasswordCrypto } from "../../../services/PasswordCrypto";

export const create = async (user: Omit<IUser, 'id' | 'admin'>): Promise<number | Error> => {
    try {

        const hashedPassword = await PasswordCrypto.hashPassword(user.password)


        const [result] = await Knex(ETableNames.user).insert({ ...user, password: hashedPassword }).returning('id');


        if (typeof result === 'object') {
            return result.id;
        } else if (typeof result === 'number') {
            return result;
        }
        return Error('Erro ao cadastrar Usuário');
    } catch (error) {
        return Error('Erro ao cadastrar');
    }

}