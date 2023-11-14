import { IProduto } from "../../models"

declare module 'knex/types/tables' {

    interface Tables {
        produto: IProduto
        //Pedidos : IPedidos
        //usuario : IUsuario
    }
}