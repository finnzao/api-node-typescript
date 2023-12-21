import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IUser } from "../../database/models";

//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler

interface IParamProps {
    id?: number;
}

interface IBodyProps extends Omit<IUser, 'id'> { }

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(4),
        mobile: yup.string().required().min(4).max(20).nonNullable(),
        email: yup.string().required().min(10).nonNullable(),
        password: yup.string().required().min(5),
        admin: yup.boolean().required()
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().required().moreThan(0).integer()
    })),
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {

    if (!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado.'
            }
        });
    }


    return res.status(StatusCodes.NO_CONTENT).json(1);
} 