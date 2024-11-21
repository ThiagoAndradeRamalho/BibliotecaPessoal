import MeuLivroService from '../services/MeuLivroService.js';

class MeuLivroController {
  async getAll(req, res) {
    try {
      const meuLivros = await MeuLivroService.getAllMeuLivros();
      if (!meuLivros || meuLivros.length === 0) {
        return res.status(404).json({ message: 'Nenhum Meu Livro encontrado.' });
      }
      return res.status(200).json(meuLivros);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao recuperar Meus Livros.' });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const meuLivro = await MeuLivroService.getMeuLivroById(parseInt(id));
      if (!meuLivro) {
        return res.status(404).json({ message: 'Meu Meu Livro não encontrado.' });
      }
      return res.status(200).json(meuLivro);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao buscar Meu Livro.' });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const meuLivro = await MeuLivroService.createMeuLivro(data);
      return res.status(201).json(meuLivro);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar livro.' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await MeuLivroService.deleteMeuLivro(parseInt(id));
      return res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar livro.' });
    }
  }
}

export default new MeuLivroController();
