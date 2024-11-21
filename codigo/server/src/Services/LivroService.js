import { prismaClient } from '../database/prismaClient.js';

class LivroService {
  async getAllLivros() {
    try {
      const livros = await prismaClient.livro.findMany({
        include: {
          autor: true,
        },
      });
      return livros;
    } catch (error) {
      console.error('Erro ao buscar livros', error);
      throw new Error('Não foi possível buscar livros.');
    }
  }

  async getLivroById(id) {
    try {
      const livro = await prismaClient.livro.findUnique({
        where: { id },
        include: {
          autor: true,
        },
      });
      return livro;
    } catch (error) {
      console.error('Erro ao buscar livro', error);
      throw new Error('Não foi possível buscar o livro.');
    }
  }

  async createLivro(data) {
    try {
      const livro = await prismaClient.livro.create({
        data: {
          nome: data.nome,
          autorId: data.autorId,
          categoria: data.categoria,
        },
      });
      return livro;
    } catch (error) {
      console.error('Erro ao criar livro', error);
      throw new Error('Não foi possível criar o livro.');
    }
  }

  async updateLivro(id, data) {

    const l = await this.getLivroById(id)

    try {
      const livro = await prismaClient.livro.update({
        where: { id },
        data: {
          nome: data.nome || l.nome,
          categoria: data.categoria || l.categoria,
        }
      });
      return livro;
    } catch (error) {
      console.error('Erro ao atualizar livro', error);
      throw new Error('Não foi possível atualizar o livro.');
    }
  }

  async deleteLivro(id) {
    try {
      const livro = await this.getLivroById(id);
      if (!livro) throw new Error('Livro não encontrado.');

      await prismaClient.livro.delete({
        where: { id },
      });

      return livro;
    } catch (error) {
      console.error('Erro ao deletar livro', error);
      throw new Error('Não foi possível deletar o livro.');
    }
  }
}

export default new LivroService();
