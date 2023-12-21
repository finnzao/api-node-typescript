import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('USER - DeleteById', () => {


    it('Apagar registro', async () => {

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

        const resApagada = await testeServer
            .delete(`/user/${res1.body.id}`)
            .send();

        expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)

    });

    it('Delete por ID precisa ser mais maior 0', async () => {

        const res2 = await testeServer
            .delete('/user/999999')
            .send()

        expect(res2.statusCode).toEqual(StatusCodes.NO_CONTENT)
        expect(res2.body).toHaveProperty('errors.default')
    })


});