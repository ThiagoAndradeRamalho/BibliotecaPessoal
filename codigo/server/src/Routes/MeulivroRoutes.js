import { Router } from "express";

import { MeuLivroController } from "../controllers//MeuLivroController.js";

const router = Router();

const meuLivroController = new MeuLivroController();

router.get('/:id', meuLivroController.getAll);
router.get('/status/:id', meuLivroController.getByStatus);
// router.get('/:id', meuLivroController.getById);
router.post('/', meuLivroController.create);
router.put('/avaliar', meuLivroController.avaliarLivro);
router.delete('/:id', meuLivroController.delete);

export { router as MeuLivroRoutes }