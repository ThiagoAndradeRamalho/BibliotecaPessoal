import { prismaClient } from '../database/prismaClient.js';

class MeuLivroService {
  async getAllMeuMeuLivros() {
    try {
      const meuLivros = await prismaClient.MeuLivro.findMany({
        include: {
          leitor: true,
          livro: true,
        },
      });
      return meuLivros;
    } catch (error) {
      console.error('Erro ao buscar meus livros', error);
      throw new Error('Não foi possível buscar meu livros.');
    }
  }

  async getMeuLivroById(id) {
    try {
      const meuLivro = await prismaClient.MeuLivro.findUnique({
        where: { id },
        include: {
          leitor: true,
          livro: true,
        },
      });
      return meuLivro;
    } catch (error) {
      console.error('Erro ao buscar meu livro', error);
      throw new Error('Não foi possível buscar o meu livro.');
    }
  }

  async createMeuLivro(data) {
    try {
      const meuLivro = await prismaClient.MeuLivro.create({
        data: {
          autorId: data.autorId,
          leitorId: data.leitorId,
          livroId: data.livroId,
          avaliacao: data.anoPublicacao,
          quantidadeEstoque: data.quantidadeEstoque,
        },
      });
      return meuLivro;
    } catch (error) {
      console.error('Erro ao criar meu livro', error);
      throw new Error('Não foi possível criar o meu livro.');
    }
  }

  async deleteMeuLivro(id) {
    try {
      const meuLivro = await this.getMeuLivroById(id);
      if (!meuLivro) throw new Error('Meu Livro não encontrado.');

      await prismaClient.MeuLivro.delete({
        where: { id },
      });

      return meuLivro;
    } catch (error) {
      console.error('Erro ao deletar meu livro', error);
      throw new Error('Não foi possível deletar o meu livro.');
    }
  }
}

export default new MeuLivroService();
