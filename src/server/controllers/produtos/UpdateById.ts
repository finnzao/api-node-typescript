import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler

interface IParamProps {
    id?:number;
}

interface IBodyProps{
    nome:string;
}

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().required().moreThan(0).integer()
    })),
}));

export const updateById = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.params);
    console.log(req.body);
    return res.status(StatusCodes.NO_CONTENT).send();
} 