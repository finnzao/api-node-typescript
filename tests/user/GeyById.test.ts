import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('user - Get by ID', () => {


    it('Gey By ID', async () => {

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
        const res2 = await testeServer
            .get(`/user/${res1.body}`)

        expect(res2.statusCode).toEqual(StatusCodes.OK)
    })

    it('Get By ID precisa ser mais que 0', async () => {

        const res2 = await testeServer
            .get('/user/0');


        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })


});