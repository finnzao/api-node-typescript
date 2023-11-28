import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { StatusCodes } from "http-status-codes";
import { UserProviders } from "../../database/providers/user";

//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler

interface IQueryProps {
    id?: number,
    filter?: string;
    limit?: number;
    page?: number;
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        id: yup.number().integer().optional().default(0),
        filter: yup.string().optional(),
        limit: yup.number().optional().moreThan(0),
        page: yup.number().optional().moreThan(0),
    })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    const result = UserProviders.getAll(req.query.page || 1, req.query.limit || 7, req.query.filter || '', Number(req.query.id))

    if (result instanceof Error)




        res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);



    return res.status(StatusCodes.OK).json(result)
}