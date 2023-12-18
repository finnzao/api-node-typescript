import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IPedido } from "../../database/models";
import { PedidosProviders } from "../../database/providers/pedidos";




interface IBodyProps extends Omit<IPedido, 'id'> { }



//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é func para executar o proximo handler

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        info: yup.string().required().min(3),
        total: yup.number().required().min(2),
        status: yup.string().required().min(2),
        discount: yup.number().required().min(2),
    })),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    const result = await PedidosProviders.create(req.body);

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.CREATED).json(result);
};