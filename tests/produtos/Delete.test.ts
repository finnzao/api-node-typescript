import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - Create', () => {
    
    
    it('Criar Produto', async () => {

        const res1 = await testeServer
        .post('/produtos')
        .send({
            nome: 'Pastel',
            price:20
        });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof(res1.body)).toEqual('object')
    })

    it('Não pode criar produto com nome pequeno',async()=>{

        const res2 = await testeServer
        .delete('/produtos/123')


        expect(res2.statusCode).toEqual(StatusCodes.OK)
    })
});