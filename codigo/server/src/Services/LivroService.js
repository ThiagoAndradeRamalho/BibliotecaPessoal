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

  async getLivrosByCategoria(id, data) {
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

  async updateAvaliacao(id) {
    try {
      const livros = await prismaClient.livro.findMany();

      for (const livro of livros) {
        const avaliacoes = await prismaClient.meuLivro.findMany({
          where: { livroId: id },
          select: { avaliacao: true },
        });

        const avaliacaoValida = avaliacoes.filter(a => a.avaliacao !== null);
        const media =
          avaliacaoValida.reduce((acc, curr) => acc + curr.avaliacao, 0) /
          avaliacaoValida.length;

        await prismaClient.livro.update({
          where: { id: livro.id },
          data: { mediaAvaliacoes: media || 0 }, 
        });
      }
    } catch (error) {
      console.error(error)
      throw new Error('Não foi possível atualizar a avaliação.');
    }
  }

  async createLivro(data) {
    try {
      const livro = await prismaClient.livro.create({
        data: {
          titulo: data.titulo,
          descricao: data.descricao,
          autor: data.auto,
          categoria: data.categoria, 
          imagem: data.imagem,  
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
