import { Router } from "express";
import { AutorRoutes } from "../routes/AutorRoutes.js";
import { LeitorRoutes } from "../routes/LeitorRoutes.js";
import { LivroRoutes } from "../routes/LivroRoutes.js";
import { MeuLivroRoutes } from "../routes/MeuLivroRoutes.js";

const routes = Router();

routes.use('/autor', AutorRoutes);
routes.use('/leitor', LeitorRoutes);
routes.use('/livro', LivroRoutes);
routes.use('/meu-livro', MeuLivroRoutes);

export default routes;