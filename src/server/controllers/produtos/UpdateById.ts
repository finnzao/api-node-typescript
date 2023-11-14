import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { IProduto } from "../../database/models";

//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler

interface IParamProps {
    id?: number;
}

interface IBodyProps extends Omit<IProduto, 'id'> { }

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
        img: yup.string().required().min(3),
        price: yup.number().required().min(2)
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().required().moreThan(0).integer()
    })),
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {
    return res.status(StatusCodes.NO_CONTENT).send();
} 