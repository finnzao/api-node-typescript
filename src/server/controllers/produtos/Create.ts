import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface IProduto {
    nome: string,
    price: number,

}



const bodyValidation: yup.Schema<IProduto> = yup.object().shape({
    nome: yup.string().required().min(3),
    price: yup.number().required().min(2)
})
//RequestHandler é um interface que já tem os paramentros para req,res e next
//Next é função para executar o proximo handler
export const createBodyValidator:RequestHandler = async (req,res,next)=>{
    try {
        await bodyValidation.validate(req.body, { abortEarly: false });
        return next()
    } catch (error) {
        const yupError = error as yup.ValidationError;
        //Record-> Criar um modelo de objeto
        const erros: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (!error.path) return;
            erros[error.path] = error.message
        })

        return res.status(StatusCodes.BAD_REQUEST).json({ validationErrors: erros });
    }
};




export const createValidate = validation()


export const create = async (req: Request<{}, {}, IProduto>, res: Response) => {
    console.log(req.body)
    res.send('Create')
}