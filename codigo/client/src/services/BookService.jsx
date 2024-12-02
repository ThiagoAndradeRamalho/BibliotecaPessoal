import axios from 'axios';
import { API_URL } from '../config/config.jsx';

class LivroService {
  async getAll() {
    try {
      const response = await axios.get(`${API_URL}/livros`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      throw new Error('Não foi possível buscar os livros.');
    }
  }

  async getById(id) {
    try {
      const response = await axios.get(`${API_URL}/livros/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar o livro:', error);
      throw new Error('Não foi possível buscar o livro.');
    }
  }

  async create(data) {
    try {
      const response = await axios.post(`${API_URL}/livro`, data);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar livro:', error);
      throw new Error('Não foi possível criar o livro.');
    }
  }

  async update(id, data) {
    try {
      const response = await axios.put(`${API_URL}/livros/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
      throw new Error('Não foi possível atualizar o livro.');
    }
  }

  async delete(id) {
    try {
      const response = await axios.delete(`${API_URL}/livros/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar livro:', error);
      throw new Error('Não foi possível deletar o livro.');
    }
  }

  async getByCategoria(categoria) {
    try {
      const response = await axios.get(`${API_URL}/livros/categoria/${categoria}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar livros por categoria:', error);
      throw new Error('Não foi possível buscar livros por categoria.');
    }
  }
}

export default new LivroService();
