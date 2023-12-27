import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { UserProviders } from "../../database/providers/user";


//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler

interface IParamProps {
    email?: string;
}

export const GetByEmailValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        email: yup.string().required()
    })),
}));

export const GetByEmail = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.body)
    if (!req.body) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado.'
            }
        });
    }
    const result = await UserProviders.getByEmail(req.body);
    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.OK).json(result);
} 