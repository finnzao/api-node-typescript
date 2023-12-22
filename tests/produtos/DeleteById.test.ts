import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - DeleteById', () => {


    it('Apagar registro', async () => {

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

        const resApagada = await testeServer
            .delete(`/produtos/${res1.body}`)
            .send();

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)

    });
    it('Tenta apagar registro que não existe', async () => {
        const res1 = await testeServer
            .delete('/produtos/99999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });


});