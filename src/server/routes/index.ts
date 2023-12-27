import { Router } from "express";
import { ProdutosController } from './../controllers/';
import { UserController } from './../controllers/';
import { PedidosController } from './../controllers/';



const router = Router()

router.get('/', (_, res) => {
    return res.send('');

})

//Produtos
router.post('/produtos', ProdutosController.createValidation, ProdutosController.create)
router.get('/produtos', ProdutosController.getAllValidation, ProdutosController.getAll)
router.get('/produtos/:id', ProdutosController.getByIdValidation, ProdutosController.getById)
router.put('/produtos/:id', ProdutosController.updateByIdValidation, ProdutosController.updateById)
router.delete('/produtos/:id', ProdutosController.deleteValidation, ProdutosController.deleteById)
//User
//router.post('/login', UserController.signUpValidation, UserController.signIn);
router.post('/signUp', UserController.signUpValidation, UserController.signUp);
router.post('/signIn', UserController.signInValidation, UserController.signIn);
router.post('/email', UserController.GetByEmailValidation, UserController.GetByEmail);
//Pedido
router.post('/pedidos/', PedidosController.createValidation, PedidosController.create)
router.get('/pedidos', PedidosController.getAllValidation, PedidosController.getAll)
router.get('/pedidos/:id', PedidosController.getByIdValidation, PedidosController.getById)
router.put('/pedidos/:id', PedidosController.updateByIdValidation, PedidosController.updateById)
router.delete('/pedidos/:id', PedidosController.deleteValidation, PedidosController.deleteById)


export { router }