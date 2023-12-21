import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('User - Create', () => {


    it('Criar Usuario', async () => {

        const res1 = await testeServer
            .post('/user')
            .send({
                name: "user4",
                mobile: 20,
                email: "emailteste@outlook.com",
                password: "password123",
                admin: false
            });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof (res1.body)).toEqual('number')
    })

    it('Não pode criar usuario com nome pequeno', async () => {

        const res2 = await testeServer
            .post('/user')
            .send({
                name: "p",
                mobile: 20,
                email: "emailteste@outlook.com",
                password: "password123",
                admin: false
            });

        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res2.body).toHaveProperty('validationErrors.body');
    })
});