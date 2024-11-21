import { Router } from "express";

import { LivroController } from "../controllers/LivroController.js";

const router = Router();

const livroController = new LivroController();

router.get('/', livroController.getAll);
router.get('/:id', livroController.getById);
router.post('/', livroController.create);
router.put('/:id', livroController.update);
router.delete('/:id', livroController.delete);

export { router as LivroRoutes }