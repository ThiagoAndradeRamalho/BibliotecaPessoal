import { Util } from '../util/Util.js'
import { prismaClient } from '../database/prismaClient.js';

class UsuarioService {
  async getAllUsuarios() {
    try {
      const usuarios = await prismaClient.usuario.findMany();
      return usuarios;
    } catch (error) {
      console.error('Erro ao buscar usuários', error);
      throw new Error('Não foi possível buscar usuários.');
    }
  }

  async getUsuarioById(id) {
    try {
      const usuario = await prismaClient.usuario.findUnique({
        where: { id },
      });
      return usuario;
    } catch (error) {
      console.error('Erro ao buscar usuário', error);
      throw new Error('Não foi possível buscar o usuário.');
    }
  }

  async createUsuario(data) {
    try {
      const { hash, salt } = Util.encryptPassword(data.senha);
  
      const usuario = await prismaClient.usuario.create({
        data: {
          nome: data.nome,
          email: data.email,
          senha: hash,
          senha_salt: salt,
          Leitor: { 
            create: {} 
          }
        },
      });
  
      return usuario;
    } catch (error) {
      console.error('Erro ao criar usuário', error);
      throw new Error('Não foi possível criar o usuário.');
    }
  }
  

  async updateUsuario(id, data) {
    const usuarioExistente = await this.getUsuarioById(id);
    if (!usuarioExistente) {
      throw new Error('Usuário não encontrado.');
    }

    try {
      const usuario = await prismaClient.usuario.update({
        where: { id },
        data: {
          nome: data.nome || usuarioExistente.nome,
          email: data.email || usuarioExistente.email,
          senha: data.senha || usuarioExistente.senha,
          senha_salt: data.senha_salt || usuarioExistente.senha_salt,
        },
      });
      return usuario;
    } catch (error) {
      console.error('Erro ao atualizar usuário', error);
      throw new Error('Não foi possível atualizar o usuário.');
    }
  }

  async deleteUsuario(id) {
    try {
      const usuario = await this.getUsuarioById(id);
      if (!usuario) throw new Error('Usuário não encontrado.');

      await prismaClient.usuario.delete({
        where: { id },
      });

      return usuario;
    } catch (error) {
      console.error('Erro ao deletar usuário', error);
      throw new Error('Não foi possível deletar o usuário.');
    }
  }

  async resetarSenha(usuarioId, resetToken, newPassword) {
    try {
      const usuario = await prismaClient.usuario.update({
        where: { id: usuarioId },
        data: {
          senha: newPassword,
          resetToken: resetToken,
          resetTokenExpiry: new Date(),
        },
      });
      return usuario;
    } catch (error) {
      console.error('Erro ao resetar a senha do usuário', error);
      throw new Error('Não foi possível resetar a senha.');
    }
  }

  async getId(criterio) {
    try {
      const usuario = await prismaClient.usuario.findUnique({
        where: { id: criterio }, 
      });
  
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }

      return usuario.id;
    } catch (error) {
      console.error('Erro ao buscar o id do usuário', error);
      throw new Error('Não foi possível obter o id do usuário.');
    }
  }
  
}

export default new UsuarioService();
