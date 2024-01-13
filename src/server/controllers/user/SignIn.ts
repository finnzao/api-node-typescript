import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { UserProviders } from '../../database/providers/user';
import { validation } from '../../shared';
import { IUser } from '../../database/models';
import { PasswordCrypto } from '../../services/PasswordCrypto';
import { JWTService } from '../../services/JWTService';

interface IBodyProps extends Omit<IUser, 'id' | 'name' | 'admin' | 'mobile'> { }

export const signInValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().min(10).nonNullable(),
        password: yup.string().required().min(5)
    })),

}));



export const signIn = async (req: Request<{}, {}, IBodyProps>, res: Response) => {

    const { email, password } = req.body;


    const user = await UserProviders.getByEmail(email)

    if (user instanceof Error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Email invalido'
            }
        })
    }

    const passwordMatch = await PasswordCrypto.verifyPassword(password, user.password)

    if (!passwordMatch) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Password invalido'
            }
        })
    } else {


        const acessToken = JWTService.sign({ uid: user.id })

        if (acessToken === 'JWT_SECRET_NOT_FOUND') {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                erros: {
                    default: 'Erro ao gerar o token de acesso'
                }
            })
        }

        return res.status(StatusCodes.OK).json({ acessToken });//acessToken:acessToken
    }
}