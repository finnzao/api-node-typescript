import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";


export const ensureAuthenticated: RequestHandler = async (req, res, next) => {
    const { authorization } = req.headers




    if (!authorization) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Sem autorização'
            }
        })
    }

    const [type, token] = authorization.split(' ')
    console.log(type, token)
    if (type !== 'Bearer') {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: { default: 'Não autenticado' }
        })
    }
    if (token !== 'token.teste') {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: { default: 'Não autenticado' }
        })
    }
    return next()
}