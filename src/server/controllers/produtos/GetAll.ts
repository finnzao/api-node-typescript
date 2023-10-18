import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";

//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler

interface IQueryProps {
    filter?: string;
    limit?: number;
    page?: number;
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        filter: yup.string().optional(),
        limit: yup.number().optional().moreThan(0),
        page: yup.number().optional().moreThan(0),
    })),
}));

export const getAll = async (req: Request<{}, {}, {},IQueryProps>, res: Response) => {
    console.log(req.query)
    return res.status(StatusCodes.OK).send('Não implementado!')
} 