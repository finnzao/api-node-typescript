import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { UserProviders } from '../../database/providers/user';
import { validation } from '../../shared';
import { IUser } from '../../database/models';
import { PasswordCrypto } from '../../services/PasswordCrypto';

interface IBodyProps extends Omit<IUser, 'id' | 'name' | 'admin' | 'mobile'> { }

export const signInValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().min(10).nonNullable(),
        password: yup.string().required().min(5)
    })),

}));



export const signIn = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    const { email, password } = req.body;


    const result = await UserProviders.getByEmail(email)

    if (result instanceof Error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Email invalido'
            }
        })
    }

    const passwordMatch = await PasswordCrypto.verifyPassword(password, result.password)

    if (!passwordMatch) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Password invalido'
            }
        })
    } else {
        return res.status(StatusCodes.OK).json({ acessToken: 'token.test' });
    }
}