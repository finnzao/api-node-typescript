import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - Create', () => {


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



    it('Criar Produto', async () => {

        const res1 = await testeServer
            .post('/produtos')
            .set({ 'authorization': `Bearer ${accessToken}` })
            .send({
                name: "produto 6",
                price: 40,
                img: "htpp:img",
                summary: "new info about produt",
                quantity: 80
            });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED)
        expect(typeof (res1.body)).toEqual('number')
    })

    it('Criando um produto sem autorização do token', async () => {

        const res2 = await testeServer
            .post('/produtos')
            .send({
                name: "Paaaaa",
                price: 40,
                img: "htpp:img",
                summary: "new info about produt",
                quantity: 80
            });

        expect(res2.statusCode).toEqual(StatusCodes.UNAUTHORIZED);
    })
});