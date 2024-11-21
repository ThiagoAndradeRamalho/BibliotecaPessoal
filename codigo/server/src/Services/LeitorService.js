import { prismaClient } from '../database/prismaClient.js';
import { Util } from '../util/Util.js';

class LeitorService {
  async getAllLeitores() {
    try {
      const leitores = await prismaClient.leitor.findMany({
        include: {
          usuario: true,
        },
      });
      return leitores;
    } catch (error) {
      console.error('Erro ao buscar leitores', error);
      throw new Error('Não foi possível buscar leitores.');
    }
  }

  async getLeitorById(id) {
    try {
      const leitor = await prismaClient.leitor.findUnique({
        where: { id },
        include: {
          usuario: true,
        },
      });
      return leitor;
    } catch (error) {
      console.error('Erro ao buscar leitor', error);
      throw new Error('Não foi possível buscar o leitor.');
    }
  }

  async createLeitor(data) {
    try {
      const { hash, salt } = Util.encryptPassword(data.senha);

      const leitor = await prismaClient.leitor.create({
        data: {
          usuario: {
            create: {
              nome: data.nome,
              email: data.email,
              senha: hash,
              senha_salt: salt,
            },
          },
        },
      });

      return leitor;
    } catch (error) {
      console.error('Erro ao criar leitor', error);
      throw new Error('Não foi possível criar o leitor.');
    }
  }

  async updateLeitor(id, data) {
    try {
      const leitor = await prismaClient.leitor.update({
        where: { id },
        data,
      });
      return leitor;
    } catch (error) {
      console.error('Erro ao atualizar leitor', error);
      throw new Error('Não foi possível atualizar o leitor.');
    }
  }

  async deleteLeitor(id) {
    try {
      const leitor = await this.getLeitorById(id);
      if (!leitor) throw new Error('Leitor não encontrado.');

      await prismaClient.usuario.delete({
        where: { id: leitor.usuarioId },
      });

      return leitor;
    } catch (error) {
      console.error('Erro ao deletar leitor', error);
      throw new Error('Não foi possível deletar o leitor.');
    }
  }
}

export default new LeitorService();
