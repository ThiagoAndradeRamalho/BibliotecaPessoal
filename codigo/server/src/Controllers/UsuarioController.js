import UsuarioService from '../Services/UsuarioService.js';

export class UsuarioController {
  async getAll(req, res) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();
      if (!usuarios || usuarios.length === 0) {
        return res.status(404).json({ message: 'Nenhum usuário encontrado.' });
      }
      return res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao recuperar usuários.', error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const usuario = await UsuarioService.getUsuarioById(parseInt(id));
      if (!usuario) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      return res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao buscar usuário.', error: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const usuario = await UsuarioService.createUsuario(data);
      return res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao criar usuário.', error: error.message });
    }
  } 

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const usuario = await UsuarioService.updateUsuario(parseInt(id), data);
      return res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json({ message: 'Erro ao atualizar usuário.', error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await UsuarioService.deleteUsuario(parseInt(id));
      return res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: 'Erro ao deletar usuário.', error: error.message });
    }
  }
}
