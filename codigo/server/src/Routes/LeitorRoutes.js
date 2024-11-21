import { Router } from "express";

import { LeitorController } from "../controllers/LeitorController.js";

const router = Router();

const leitorController = new LeitorController();

router.get('/', leitorController.getAll);
router.get('/:id', leitorController.getById);
router.post('/', leitorController.create);
router.put('/:id', leitorController.update);
router.delete('/:id', leitorController.delete);

export { router as LeitorRoutes }