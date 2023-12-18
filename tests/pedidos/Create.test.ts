import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Pedido - Create', () => {


    it('Criar Pedido', async () => {

        const res1 = await testeServer
            .post('/pedidos')
            .send({
                info: "pedido number 1",
                total: 305.20,
                discount: 90,
                status: "string",
                userId: 2
            });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof (res1.body)).toEqual('number')
    })

    it('Não pode criar pedido com nome pequeno', async () => {

        const res2 = await testeServer
            .post('/pedidos')
            .send({
                info: "p",
                total: 305.20,
                discount: 90,
                status: "string",
                userId: 1

            });

        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res2.body).toHaveProperty('validationErrors.body');
    })
});