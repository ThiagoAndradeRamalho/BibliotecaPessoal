import MeuLivroService from '../services/MeuLivroService.js';

export class MeuLivroController {
  async getAll(req, res) {
    try {
      const { id } = req.params
      console.log(id)
      const meuLivros = await MeuLivroService.getAllMeusLivros(parseInt(id));
      if (!meuLivros || meuLivros.length === 0) {
        return res.status(404).json({ message: 'Nenhum Meus Livros encontrado.' });
      }
      return res.status(200).json(meuLivros);
    } catch (error) {
      console.log(error);
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
      console.log(error);
      res.status(400).json({ message: 'Erro ao buscar Meu Livro.' });
    }
  }

  async getByStatus(req, res) {
    try {
      const { id } = req.params
      console.log(id);
      const data = req.body;
      console.log(data.status);
      const livros = await MeuLivroService.getMeusLivrosByStatus(parseInt(id), data)
      return res.status(200).json(livros);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Erro ao buscar Meu Livro.' });
    }
  }

  async avaliarLivro(req, res) {
    try {
      const data = req.body;
      const meuLivro = await MeuLivroService.avaliarLivro(data);
      return res.status(200).json({ message: 'Livro avaliado' });
    } catch (error) {
      res.status(400).json({ message: 'Erro ao avaliar o livro.' });
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
      return res.status(204).json({ message: 'Livro deletado com sucesso.' });
    } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar livro.' });
    }
  }
}
