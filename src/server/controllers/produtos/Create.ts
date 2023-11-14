import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IProduto } from "../../database/models";
import { ProdutosProviders } from "../../database/providers";




interface IBodyProps extends Omit<IProduto, 'id'> { }
//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler
interface IFilter {
    filter?: string;
    limite?: number
}
export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
        img: yup.string().required().min(3),
        price: yup.number().required().min(2),
    })),

    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().min(3).optional()
    })),

}));

export const create = async (req: Request<{}, {}, IProduto>, res: Response) => {

    const result = await ProdutosProviders.create(req.body)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: {
                default: result.message
            }
        });
    }


    return res.status(StatusCodes.CREATED).json(result)
}