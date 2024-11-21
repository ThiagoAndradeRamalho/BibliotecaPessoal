import LeitorService from '../services/LeitorService.js';

export class LeitorController {
  async getAll(req, res) {
    try {
      const leitores = await LeitorService.getAllLeitores();
      if (!leitores || leitores.length === 0) {
        return res.status(404).json({ message: 'Nenhum leitor encontrado.' });
      }
      return res.status(200).json(leitores);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao recuperar leitores.' });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const leitor = await LeitorService.getLeitorById(parseInt(id));
      if (!leitor) {
        return res.status(404).json({ message: 'Leitor não encontrado.' });
      }
      return res.status(200).json(leitor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao buscar leitor.' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const leitor = await LeitorService.createLeitor(data);
      return res.status(201).json(leitor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar leitor.' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const leitor = await LeitorService.updateLeitor(parseInt(id), data);
      return res.status(200).json(leitor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar leitor.' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await LeitorService.deleteLeitor(parseInt(id));
      return res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar leitor.' });
    }
  }
}

