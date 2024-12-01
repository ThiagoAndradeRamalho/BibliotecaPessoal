import { prismaClient } from '../database/prismaClient.js';
import { Util } from '../util/Util.js';
import jwt from 'jsonwebtoken';

class AuthService {
    
    static async authenticate(email, senha) {


        const usuario = await prismaClient.usuario.findUnique({
            where: { email:email },
        });
    
        if (!usuario) {
            throw new Error('Usuário não encontrado.');
        }
    
        const isPasswordValid = Util.verifyPassword({ salt: usuario.senha_salt, hash: usuario.senha }, senha);
        if (!isPasswordValid) {
            throw new Error('Senha inválida.');
        }
    
        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

    
        const usuarioLogado = {
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome,
        };
    
        return { usuario: usuarioLogado, token: token };
    }

}

export default AuthService;