import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Pedidos - GetAll', () => {


    it('Buscar todos os registros', async () => {

        const res1 = await testeServer
            .post('/pedidos')
            .send({
                info: "Pedido number 1",
                total: 305.20,
                discount: 90,
                status: "string",
                userId: 1
            });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resBuscando = await testeServer.get('/pedidos').send();


        expect(Number(resBuscando.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscando.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscando.body.length).toBeGreaterThan(0);

    })

});