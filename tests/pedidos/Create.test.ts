import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Pedido - Create', () => {


    let accessToken = '';
    beforeAll(async () => {
        const dateUser = { email: 'emailTeste@gmail.com', password: 'password123' };
        await testeServer.post('/signUp').send({
            name: "Pedro Silva",
            mobile: 99111111,
            email: dateUser.email,
            password: dateUser.password,
            admin: false
        })

        const signInRes = await testeServer.post('/signIn').send({
            email: dateUser.email,
            password: dateUser.password
        })

        accessToken = signInRes.body.acessToken

    })



    it('Criar Pedido', async () => {

        const res1 = await testeServer
            .post('/pedidos')
            .set({ 'authorization': `Bearer ${accessToken}` })
            .send({
                info: "pedido number 1",
                total: 305.20,
                discount: 90,
                status: "string",
            });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof (res1.body)).toEqual('number')
    })

    it('Não pode criar pedido com nome pequeno', async () => {

        const res2 = await testeServer
            .post('/pedidos')
            .set({ 'authorization': accessToken })
            .send({
                info: "p",
                total: 305.20,
                discount: 90,
                status: "string",
            });

        expect(res2.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
        expect(res2.body).toHaveProperty('errors');
    })
});