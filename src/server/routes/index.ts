import { Router } from "express";
import { ProdutosController } from './../controllers/';
import { UserController } from './../controllers/';
import { PedidosController } from './../controllers/';
import { ensureAuthenticated } from '../shared/middleware/EnsureAuthenticated'


const router = Router()

router.get('/', ensureAuthenticated, (_, res) => {
    return res.send('');

})

//Produtos
router.post('/produtos', ensureAuthenticated, ProdutosController.createValidation, ProdutosController.create)
router.get('/produtos', ensureAuthenticated, ProdutosController.getAllValidation, ProdutosController.getAll)
router.get('/produtos/:id', ensureAuthenticated, ProdutosController.getByIdValidation, ProdutosController.getById)
router.put('/produtos/:id', ensureAuthenticated, ProdutosController.updateByIdValidation, ProdutosController.updateById)
router.delete('/produtos/:id', ensureAuthenticated, ProdutosController.deleteValidation, ProdutosController.deleteById)
//User
//router.post('/login',ensureAuthenticated, UserController.signUpValidation, UserController.signIn);
router.post('/signUp', UserController.signUpValidation, UserController.signUp);
router.post('/signIn', UserController.signInValidation, UserController.signIn);
router.get('/email', ensureAuthenticated, UserController.GetByEmail);

//Pedido
router.post('/pedidos/', ensureAuthenticated, PedidosController.createValidation, PedidosController.create)
router.get('/pedidos', ensureAuthenticated, PedidosController.getAllValidation, PedidosController.getAll)
router.get('/pedidos/:id', ensureAuthenticated, PedidosController.getByIdValidation, PedidosController.getById)
router.put('/pedidos/:id', ensureAuthenticated, PedidosController.updateByIdValidation, PedidosController.updateById)
router.delete('/pedidos/:id', ensureAuthenticated, PedidosController.deleteValidation, PedidosController.deleteById)


export { router }