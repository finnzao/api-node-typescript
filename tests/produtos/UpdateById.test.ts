import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - Create', () => {


    it('Alterando produto', async () => {

        const res1 = await testeServer
            .put('/produtos/123').send({
                nome: "Alterando nome do produto"
            })

        expect(res1.statusCode).toEqual(StatusCodes.OK)
        expect(typeof (res1.body)).toEqual('object')
    })

    it('Get By ID precisa ser mais que 0', async () => {

        const res2 = await testeServer
            .put('/produtos/0');


        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })

    it('Precisa de um nome ao menos com 3 caracteres', async () => {

        const res1 = await testeServer
            .put('/produtos/123').send({
                nome: "1"
            })

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(typeof (res1.body)).toEqual('object')
    })
});