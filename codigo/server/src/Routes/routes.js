import { Router } from "express";
import { UsuarioRoutes } from "../routes/UsuarioRoutes.js";
import { AutorRoutes } from "../Routes/AutorRoutes.js";
import { LeitorRoutes } from "../routes/LeitorRoutes.js";
import { LivroRoutes } from "../routes/LivroRoutes.js";
import { MeuLivroRoutes } from "../routes/MeuLivroRoutes.js";
import { AuthenticateRoutes } from "../Routes/AuthenticateRoutes.js";

const routes = Router();

routes.use('/usuario', UsuarioRoutes);
routes.use('/login', AuthenticateRoutes);
routes.use('/autor', AutorRoutes);
routes.use('/leitor', LeitorRoutes);
routes.use('/livros', LivroRoutes);
routes.use('/meu-livro', MeuLivroRoutes);

export default routes;