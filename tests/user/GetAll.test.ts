import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('USER - GetAll', () => {


    it('Buscar todos os registros', async () => {

        const res1 = await testeServer
            .post('/user')
            .send({
                name: "user4",
                mobile: "202020",
                email: "emailteste@outlook.com",
                password: "password123",
                admin: false
            });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED)

        const resBuscando = await testeServer.get('/user').send();


        expect(Number(resBuscando.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscando.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscando.body.length).toBeGreaterThan(0);

    })

});