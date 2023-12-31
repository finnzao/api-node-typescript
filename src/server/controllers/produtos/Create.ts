import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IProduto } from "../../database/models";
import { ProdutosProviders } from "../../database/providers/produtos";




interface IBodyProps extends Omit<IProduto, 'id'> { }



//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
        img: yup.string().required().min(3),
        price: yup.number().required().min(2),
        summary: yup.string().required().min(2),
        quantity: yup.number().integer().required().min(2),
    })),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    const result = await ProdutosProviders.create(req.body);

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.CREATED).json(result);
};