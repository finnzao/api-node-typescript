import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { UserProviders } from '../../database/providers/user';
import { validation } from '../../shared';
import { IUser } from '../../database/models';
import { PasswordCrypto } from '../../services/PasswordCrypto';

interface IBodyProps extends Omit<IUser, 'id'> { }

export const signUpValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(4),
        mobile: yup.string().required().min(4).nonNullable(),
        email: yup.string().required().min(10).nonNullable(),
        password: yup.string().required().min(5),
        admin: yup.boolean().required(),
    })),

}));



export const signUp = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    //EMAILVALIDATION ERROR
    const emailExisnt = await UserProviders.getByEmail(req.body.email)
    console.log(typeof(emailExisnt))
    if (emailExisnt instanceof Error) {

    } else {
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