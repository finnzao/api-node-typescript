import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Pedidos - Update by ID', () => {


    it('Alterando pedidos com ID inexistente', async () => {

        const res1 = await testeServer
            .put('/pedidos/9999999999').send({
                info: "Pedidos number 1",
                total: 305.20,
                discount: 90,
                status: "string"
            })

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(typeof (res1.body)).toEqual('object')
    })

    it('Get By ID precisa ser mais que 0', async () => {

        const res2 = await testeServer
            .put('/pedidos/0');


        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })

    it('Precisa de um nome ao menos com 3 caracteres', async () => {

        const res1 = await testeServer
            .put('/pedidos/123').send({
                info: "1"
            })

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(typeof (res1.body)).toEqual('object')
    })
});