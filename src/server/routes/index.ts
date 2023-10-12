import { Router } from "express";
import { ProdutosControler } from './../controllers/produtos/'



const router = Router()


router.get('/', (_, res) => {
    return res.send('Olá,DEV!');

})


router.post('/produtos',ProdutosControler.createBodyValidator,ProdutosControler.create)

export { router }