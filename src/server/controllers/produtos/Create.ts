import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface IProduto {
    nome: string,
    price: number,

}
//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler
interface IFilter {
    filter?: string;
    limite?:number
}
export const createValidation = validation((getSchema) => ({
    body: getSchema<IProduto>(yup.object().shape({
        nome: yup.string().required().min(3),
        price: yup.number().required().min(2)
    })),

    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(3)
    })),

}));

export const create = async (req: Request<{}, {}, IProduto>, res: Response) => {
    console.log(req.body)
    res.send('Create')
}