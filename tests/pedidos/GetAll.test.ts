import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - GetAll', () => {


    it('Buscar todos os registros', async () => {

        const res1 = await testeServer
            .post('/produtos')
            .send({
                name: 'aaaaa',
                price: 2402,
                img:'http:img'
            });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resBuscando = await testeServer.get('/produtos').send();
        
        
        expect (Number(resBuscando.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscando.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscando.body.length).toBeGreaterThan(0);

    })

});