import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { UserProviders } from '../../database/providers/user';
import { validation } from '../../shared';
import { IUser } from '../../database/models';

interface IBodyProps extends Omit<IUser, 'id' | 'admin'> { }

export const signUpValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(4),
        mobile: yup.string().required().min(8).nonNullable(),
        email: yup.string().required().min(10).nonNullable(),
        password: yup.string().required().min(5),

    })),

}));



export const signUp = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    //EMAILVALIDATION ERROR
    const emailExisnt = await UserProviders.getByEmail(req.body.email)
    if (!(emailExisnt instanceof Error)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: "Email já cadastrado"
            }
        })
    }
    const result = await UserProviders.create(req.body);
    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.CREATED).json(result);
};