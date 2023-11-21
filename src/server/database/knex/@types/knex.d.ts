import { IProduto } from "../../models"
import { IPedido } from "../../models"
import { IUser } from "../../models"

declare module 'knex/types/tables' {

    interface Tables {
        produto: IProduto
        edido: IPedido
        user: IUser
    }
}