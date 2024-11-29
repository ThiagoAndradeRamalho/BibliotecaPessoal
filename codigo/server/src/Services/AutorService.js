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

    const a = await this.getAutorById(id);


    try {
      const autor = await prismaClient.autor.update({
        where: { id },
        data: {
          mediaAvaliacoes: data.mediaAvaliacoes || a.mediaAvaliacoes,
          usuario: {
            update: {
              nome: data.nome || a.usuario.nome,
              email: data.email || a.usuario.email,
            },
          },
        }
      });
      return autor;
    } catch (error) {
      console.error('Erro ao atualizar autor', error);
      throw new Error('Não foi possível atualizar o autor.');
    }
  }

  async avaliarAutor(data) {
    try {
      const avaliacao = await prismaClient.avaliacaoAutor.create({
        data: {
          leitorId: data.leitorId,
          autorId: data.autorId,
          avaliacao: data.avaliacao,
        },
      });

      // Atualizar a média do autor após a avaliação
      await this.atualizarMediaAvaliacoes(data.autorId);

      return avaliacao;
    } catch (error) {
      console.error(error);
      throw new Error('Não foi possível registrar a avaliação do autor.');
    }
  }

  async atualizarMediaAvaliacoes(autorId) {
    try {
      // Recuperar todas as avaliações do autor
      const avaliacoes = await prismaClient.avaliacaoAutor.findMany({
        where: { autorId },
      });

      // Calcular a média
      const totalAvaliacoes = avaliacoes.length;
      const somaAvaliacoes = avaliacoes.reduce((soma, item) => soma + item.avaliacao, 0);
      const media = totalAvaliacoes > 0 ? Math.floor(somaAvaliacoes / totalAvaliacoes) : null;

      // Atualizar a média no autor
      await prismaClient.autor.update({
        where: { id: autorId },
        data: { mediaAvaliacoes: media },
      });
    } catch (error) {
      console.error(error);
      throw new Error('Não foi possível atualizar a média de avaliações do autor.');
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
