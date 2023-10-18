import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - Create', () => {
    
    
    it('Get all', async () => {

        const res1 = await testeServer
        .get('/produtos?page=1&limit=1&filter=123').send({
            email: 'userTeste',
            password:1234  
        })

        expect(res1.statusCode).toEqual(StatusCodes.OK)
        expect(typeof(res1.body)).toEqual('object')
    })

    it('TESTE QUERY',async()=>{

        const res2 = await testeServer
        .get('/produtos?page=0&limit=0&filter=11');

                   
        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })


});