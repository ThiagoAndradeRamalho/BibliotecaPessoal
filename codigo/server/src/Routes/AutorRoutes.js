import { Router } from "express";

import { AutorController } from "../controllers/AutorController.js";

const router = Router();

const autorController = new AutorController();

router.get('/', autorController.getAll);
router.get('/:id', autorController.getById);
router.post('/', autorController.create);
router.put('/:id', autorController.update);
router.delete('/:id', autorController.delete);

export { router as AutorRoutes }