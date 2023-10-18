import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - Create', () => {
    
    
    it('Delete by id', async () => {

        const res1 = await testeServer
        .delete('/produtos/123')

        expect(res1.statusCode).toEqual(StatusCodes.OK)
        expect(typeof(res1.body)).toEqual('object')
    })

    it('Delete por ID precisa ser mais maior 0',async()=>{

        const res2 = await testeServer
        .delete('/produtos/999999')
        .send()
        
        expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res2.body).toHaveProperty('errors.default')
    })


});