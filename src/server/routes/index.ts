import { Router } from "express";
import { ProdutosController } from './../controllers/';
import { UserController } from './../controllers/';
import { PedidosController } from './../controllers/';



const router = Router()

router.get('/', (_, res) => {
    return res.send('Olá,DEV!');

})

//Produtos
router.post('/produtos', ProdutosController.createValidation, ProdutosController.create)
router.get('/produtos', ProdutosController.getAllValidation, ProdutosController.getAll)
router.get('/produtos/:id', ProdutosController.getByIdValidation, ProdutosController.getById)
router.put('/produtos/:id', ProdutosController.updateByIdValidation, ProdutosController.updateById)
router.delete('/produtos/:id', ProdutosController.deleteValidation, ProdutosController.deleteById)
//User
router.post('/user', UserController.createValidation, UserController.create)
router.get('/user', UserController.getAllValidation, UserController.getAll)
router.get('/user/:id', UserController.getByIdValidation, UserController.getById)
router.put('/user/:id', UserController.updateByIdValidation, UserController.updateById)
router.delete('/user/:id', UserController.deleteValidation, UserController.deleteById)
//Pedido
router.post('/pedidos/', PedidosController.createValidation, PedidosController.create)
router.get('/pedidos', PedidosController.getAllValidation, PedidosController.getAll)
router.get('/pedidos/:id', PedidosController.getByIdValidation, PedidosController.getById)
router.put('/pedidos/:id', PedidosController.updateByIdValidation, PedidosController.updateById)
router.delete('/pedidos/:id', PedidosController.deleteValidation, PedidosController.deleteById)


export { router }