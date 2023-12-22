import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - Create', () => {


    it('Criar Produto', async () => {

        const res1 = await testeServer
            .post('/produtos')
            .send({
                name: "produto 6",
                price: 40,
                img: "htpp:img",
                summary: "new info about produt",
                quantity: 80
            });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof (res1.body)).toEqual('number')
    })

    it('Não pode criar produto com nome pequeno', async () => {

        const res2 = await testeServer
            .post('/produtos')
            .send({
                name: "P",
                price: 40,
                img: "htpp:img",
                summary: "new info about produt",
                quantity: 80
            });

        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res2.body).toHaveProperty('validationErrors.body');
    })
});