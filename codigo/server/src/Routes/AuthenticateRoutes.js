import { Router } from "express";

import { AuthController } from "../Controllers/AuthenticateController.js";

const router = Router();
const authController = new AuthController();

router.post('/', authController.authenticate);

export { router as AuthenticateRoutes }