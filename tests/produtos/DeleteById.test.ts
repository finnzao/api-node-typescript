import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - DeleteById', () => {


    it('Apagar registro', async () => {

        const res1 = await testeServer
        .post('/produtos')
        .send({
            nome: 'Pao de alho',
            price:204
        });


        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resApagada = await testeServer
        .delete(`/produtos/${res1.body.id}`)
        .send();
        
        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)

    });

    it('Delete por ID precisa ser mais maior 0', async () => {

        const res2 = await testeServer
            .delete('/produtos/999999')
            .send()

        expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res2.body).toHaveProperty('errors.default')
    })


});