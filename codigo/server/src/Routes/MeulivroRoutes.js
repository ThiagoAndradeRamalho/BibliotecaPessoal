import { Router } from "express";

import { MeuLivroController } from "../controllers/MeuLivroController.js";

const router = Router();

const meuLivroController = new MeuLivroController();

router.get('/', meuLivroController.getAll);
router.get('/:id', meuLivroController.getById);
router.post('/', meuLivroController.create);
router.delete('/:id', meuLivroController.delete);

export { router as MeuLivroRoutes }