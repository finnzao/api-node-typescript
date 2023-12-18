import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Pedido - DELETE', () => {


    it('Não pode criar pedidos com nome pequeno', async () => {

        const res2 = await testeServer
            .delete('/pedidos/1')


        expect(res2.statusCode).toEqual(StatusCodes.NO_CONTENT)
    })
});