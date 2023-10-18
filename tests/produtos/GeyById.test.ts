import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - Create', () => {
    
    
    it('Criar Produto', async () => {

        const res1 = await testeServer
        .get('/produtos/123')

        expect(res1.statusCode).toEqual(StatusCodes.OK)
        expect(typeof(res1.body)).toEqual('object')
    })

    it('Get By ID precisa ser mais que 0',async()=>{

        const res2 = await testeServer
        .get('/produtos/0');

        
        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })


});