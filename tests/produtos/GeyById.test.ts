import { StatusCodes } from "http-status-codes";
import { testeServer } from "../jest.setup";

describe('Produtos - Get by ID', () => {


    it('Gey By ID', async () => {
        const resCreate = await testeServer
            .post('/produtos')
            .send({
                name: "produto 6",
                price: 40,
                img: "htpp:img",
                summary: "new info about produt",
                quantity: 80
            });


        expect(resCreate.statusCode).toEqual(StatusCodes.CREATED)
        const resChange = await testeServer
            .get(`/produtos/${resCreate.body}`)

        expect(resChange.statusCode).toEqual(StatusCodes.OK)
        expect(typeof (resChange.body)).toEqual('object')
    })

    it('Get By ID precisa ser mais que 0', async () => {

        const res2 = await testeServer
            .get('/produtos/0');


        expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })


});