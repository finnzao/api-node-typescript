import { Router } from "express";
import { ProdutosController } from './../controllers/produtos/'



const router = Router()


router.get('/', (_, res) => {
    return res.send('Olá,DEV!');

})


router.post('/produtos',ProdutosController.createValidation,ProdutosController.create)

export { router }