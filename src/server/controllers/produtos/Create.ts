import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

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
        filter: yup.string().min(3).optional()
    })),

}));

export const create = async (req: Request<{}, {}, IProduto>, res: Response) => {
    console.log(req.body)
    return res.status(StatusCodes.CREATED).send('Não implementado');
}