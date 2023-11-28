import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - DELETE', () => {
    

    it('Não pode criar produto com nome pequeno',async()=>{

        const res2 = await testeServer
        .delete('/produtos/123')


        expect(res2.statusCode).toEqual(StatusCodes.NO_CONTENT)
    })
});