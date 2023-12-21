import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Pedido - DeleteById', () => {


    it('Apagar registro', async () => {

        const res1 = await testeServer
            .post('/pedidos')
            .send({
                info: "Pedido number 4",
                total: 305.20,
                discount: 90,
                status: "string"
            });


        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resApagada = await testeServer
            .delete(`/pedidos/${res1.body}`)
            .send();

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)

    });

    it('Deletando id inexistente', async () => {

        const res2 = await testeServer
            .delete('/pedidos/999999')
            .send()
        expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res2.body).toHaveProperty('errors.default')
    })
    
    it('Deletando ID menor que 1', async () => {

        const res2 = await testeServer
            .delete('/pedidos/0')
            .send()
        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })

});