import axios from 'axios';
import { API_URL } from '../config/config.jsx';

class UsuarioService {

  async create(userData) {
    try {
      console.log(API_URL); 
      const response = await axios.post(`${API_URL}/usuario`, userData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Falha ao criar usuário');
    }
  }

  async update(id, userData) {
    try {
      const response = await axios.put(`${API_URL}/usuario/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw new Error('Falha ao atualizar usuário');
    }
  }

  async delete(id) {
    try {
      const response = await axios.delete(`${API_URL}/usuario/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      throw new Error('Falha ao excluir usuário');
    }
  }

}

export default new UsuarioService();
