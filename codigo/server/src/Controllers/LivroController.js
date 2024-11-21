import LivroService from '../services/LivroService.js';

class LivroController {
  async getAll(req, res) {
    try {
      const livros = await LivroService.getAllLivros();
      if (!livros || livros.length === 0) {
        return res.status(404).json({ message: 'Nenhum livro encontrado.' });
      }
      return res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao recuperar livros.' });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const livro = await LivroService.getLivroById(parseInt(id));
      if (!livro) {
        return res.status(404).json({ message: 'Livro não encontrado.' });
      }
      return res.status(200).json(livro);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao buscar livro.' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const livro = await LivroService.createLivro(data);
      return res.status(201).json(livro);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar livro.' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const livro = await LivroService.updateLivro(parseInt(id), data);
      return res.status(200).json(livro);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar livro.' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await LivroService.deleteLivro(parseInt(id));
      return res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar livro.' });
    }
  }
}

export default new LivroController();
