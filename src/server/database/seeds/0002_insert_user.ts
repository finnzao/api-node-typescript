import { Knex } from "knex";
import { ETableNames } from "../ETableNames";





export const seed = async (knex: Knex) => {

    const userSeedOne = [
        {
            name: "user4",
            mobile: "759988005",
            email: "emailteste@outlook.com",
            password: "password123",
            admin: false
        },
    ]

    const [{ count }] = await knex(ETableNames.user).count<[{ count: number }]>('* as count');

    if (!Number.isInteger(count) || Number(count) > 0) return;
    const pedidoToInsert = userSeedOne.map(dateUser => ({
        name: dateUser.name,
        email: dateUser.email,
        mobile: dateUser.mobile,
        password: dateUser.password,
        admin: dateUser.admin
    }))
    await knex(ETableNames.user).insert(pedidoToInsert)



}; 