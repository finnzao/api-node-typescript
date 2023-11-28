import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IUser } from "../../database/models";
import { UserProviders } from "../../database/providers/user";




interface IBodyProps extends Omit<IUser, 'id'> { }
//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler
interface IFilter {
    filter?: string;
    limite?: number
}
export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(4),
        mobile: yup.number().required().min(4).max(20).nonNullable(),
        email: yup.string().required().min(10).nonNullable(),
        password: yup.string().required().min(5),
        admin: yup.boolean().required(),
    })),

    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().min(3).optional()
    })),

}));

export const create = async (req: Request<{}, {}, IUser>, res: Response) => {

    const result = await UserProviders.create(req.body)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: {
                default: result.message
            }
        });
    }


    return res.status(StatusCodes.CREATED).json(result)
}