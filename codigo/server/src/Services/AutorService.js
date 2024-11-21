import { prismaClient } from '../database/prismaClient.js';

class AutorService {
  async getAllAutores() {
    try {
      const autores = await prismaClient.autor.findMany({
        include: {
          usuario: true,
          livrosCriados: true,
        },
      });
      return autores;
    } catch (error) {
      console.error('Erro ao buscar autores', error);
      throw new Error('Não foi possível buscar autores.');
    }
  }

  async getAutorById(id) {
    try {
      const autor = await prismaClient.autor.findUnique({
        where: { id },
        include: {
          usuario: true,
          livrosCriados: true,
        },
      });
      return autor;
    } catch (error) {
      console.error('Erro ao buscar autor', error);
      throw new Error('Não foi possível buscar o autor.');
    }
  }

  async createAutor(data) {
    try {
      const autor = await prismaClient.autor.create({
        data: {
          mediaAvaliacoes: data.mediaAvaliacoes || null,
          usuario: {
            create: {
              nome: data.nome,
              email: data.email,
              senha: data.senha,
              senha_salt: data.senha_salt,
            },
          },
        },
      });

      return autor;
    } catch (error) {
      console.error('Erro ao criar autor', error);
      throw new Error('Não foi possível criar o autor.');
    }
  }

  async updateAutor(id, data) {
    try {
      const autor = await prismaClient.autor.update({
        where: { id },
        data,
      });
      return autor;
    } catch (error) {
      console.error('Erro ao atualizar autor', error);
      throw new Error('Não foi possível atualizar o autor.');
    }
  }

  async deleteAutor(id) {
    try {
      const autor = await this.getAutorById(id);
      if (!autor) throw new Error('Autor não encontrado.');

      await prismaClient.usuario.delete({
        where: { id: autor.usuarioId },
      });

      return autor;
    } catch (error) {
      console.error('Erro ao deletar autor', error);
      throw new Error('Não foi possível deletar o autor.');
    }
  }
}

export default new AutorService();
