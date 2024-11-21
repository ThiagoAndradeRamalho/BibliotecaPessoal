import AutorService from '../services/AutorService.js';

export class AutorController {
  async getAll(req, res) {
    try {
      const autores = await AutorService.getAllAutores();
      if (!autores || autores.length === 0) {
        return res.status(404).json({ message: 'Nenhum autor encontrado.' });
      }
      return res.status(200).json(autores);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao recuperar autores.' });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const autor = await AutorService.getAutorById(parseInt(id));
      if (!autor) {
        return res.status(404).json({ message: 'Autor não encontrado.' });
      }
      return res.status(200).json(autor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao buscar autor.' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const autor = await AutorService.createAutor(data);
      return res.status(201).json(autor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar autor.' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const autor = await AutorService.updateAutor(parseInt(id), data);
      return res.status(200).json(autor);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar autor.' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await AutorService.deleteAutor(parseInt(id));
      return res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar autor.' });
    }
  }
}
