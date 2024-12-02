import { Router } from "express";
import { LivroController } from "../Controllers/LivroController";

const router = Router();

const livroController = new LivroController();

router.get('/', livroController.getAll);
router.get('/:id', livroController.getById);
router.post('/', livroController.create);
router.put('/avaliacoes/:id', livroController.updateAvaliacoes);
router.delete('/:id', livroController.delete);

export { router as LivroRoutes }