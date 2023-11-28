import { Router } from "express";
import { ProdutosController } from './../controllers/produtos/';
import { UserController } from './../controllers/user/';



const router = Router()


router.get('/', (_, res) => {
    return res.send('Olá,DEV!');

})

//Produtos
router.get('/produtos', ProdutosController.getAllValidation, ProdutosController.getAll)
router.get('/produtos/:id', ProdutosController.getByIdValidation, ProdutosController.getById)
router.post('/produtos', ProdutosController.createValidation, ProdutosController.create)
router.put('/produtos/:id', ProdutosController.updateByIdValidation, ProdutosController.updateById)
router.delete('/produtos/:id', ProdutosController.deleteValidation, ProdutosController.deleteById)
//User
router.post('/user', UserController.createValidation,UserController.create)

export { router }