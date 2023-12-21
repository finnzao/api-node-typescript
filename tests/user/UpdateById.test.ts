import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('User - Update by ID', () => {


    it('Alterando pedidos com ID inexistente', async () => {

               
        const res1 = await testeServer
            .put('/user/999999999').send({
                name: "AlterandoUser",
                mobile: 97403150,
                email: "emailteste@outlook.com",
                password: "password123",
                admin: false
            })

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(typeof (res1.body)).toEqual('object')
    })

    it('Get By ID precisa ser mais que 0', async () => {

        const res2 = await testeServer
            .put('/user/0');


        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })

    it('Precisa de um nome ao menos com 3 caracteres', async () => {

        const res1 = await testeServer
            .put('/user/123').send({
                name: "1"
            })

        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST)
        expect(typeof (res1.body)).toEqual('object')
    })
});