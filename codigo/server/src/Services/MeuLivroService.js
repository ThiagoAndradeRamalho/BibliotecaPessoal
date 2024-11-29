import { prismaClient } from '../database/prismaClient.js';

class MeuLivroService {
  async getAllMeusLivros(id) {
    try {
      const meuLivros = await prismaClient.meuLivro.findMany({
        where: { leitorId: id },
        include: {
          leitor: true,
          livro: true,
        },
      });
      return meuLivros;
    } catch (error) {
      console.error('Erro ao buscar meus livros', error);
      throw new Error('Não foi possível buscar meu livross.');
    }
  }

  async getMeuLivroById(id) {
    try {
      const meuLivro = await prismaClient.meuLivro.findUnique({
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

  async getMeusLivrosByStatus(id, data) {
    try {
      console.log(data.status)
      const meuLivros = await prismaClient.meuLivro.findMany({
        where: {
          AND: [
            { leitorId: id },
            { status: data.status },
          ],
        },
        include: {
          leitor: true,
          livro: true,
        },
      });
      if (!meuLivros) throw new Error(`Livros com o status {data.status} nao encontrado.`, data.status);
      return meuLivros;
    } catch (error) {
      console.error('Erro ao buscar meus livros por status', error);
      throw new Error('Não foi possível buscar meus livros.');
    }
  }

  async createMeuLivro(data) {
    try {
      const meuLivro = await prismaClient.meuLivro.create({
        data: {
          leitorId: data.leitorId,
          livroId: data.livroId,
          status: "DESEJO",
        },
      });
      return meuLivro;
    } catch (error) {
      console.error('Erro ao criar meu livro', error);
      throw new Error('Não foi possível criar o meu livro.');
    }
  }

  async avaliarLivro(data) {
    try {

      const meuLivro = await this.getMeuLivroById(data.meuLivroId)
      
      if (!meuLivro) throw new Error('Meu Livro não encontrado.');

      meuLivro.avaliacao = data.avaliacao;
      const livroAtt = await prismaClient.meuLivro.update({
        where: { id: meuLivro.id },
        data: {
          avaliacao: parseInt(data.avaliacao),
        }
      });
      return livroAtt;
      
    } catch (error) {
      console.error(error);
      throw new Error('Não foi possível avaliar o livro.');
    }
  }

  async deleteMeuLivro(id) {
    try {
      const meuLivro = await this.getMeuLivroById(id);
      if (!meuLivro) throw new Error('Meu Livro não encontrado.');

      await prismaClient.meuLivro.delete({
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

