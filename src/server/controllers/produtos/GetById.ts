import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler

interface IParamProps {
    id?:number;
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().required().moreThan(0).integer()
    })),
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
    console.log(req.params)
    return res.status(StatusCodes.OK).json({
        id:req.params.id,
        nome:'Pão com alho'
    })
} 