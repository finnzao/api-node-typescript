import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Pedido - Get by ID', () => {


    it('Gey By ID', async () => {

        const resCreate = await testeServer
            .post('/pedidos')
            .send({
                info: "Pedido number 4",
                total: 305.20,
                discount: 90,
                status: "string"
            });


        expect(resCreate.statusCode).toEqual(StatusCodes.CREATED)


        const resChange = await testeServer
            .delete(`/pedidos/${resCreate.body}`)
            .send();


        expect(resChange.statusCode).toEqual(StatusCodes.NO_CONTENT)
        expect(typeof (resChange.body)).toEqual('object')
    })

    it('Get By ID precisa ser mais que 0', async () => {

        const res2 = await testeServer
            .get('/pedidos/0');


        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })


});