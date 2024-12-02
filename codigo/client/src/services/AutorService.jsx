import axios from 'axios';
import { API_URL } from '../config/config.jsx';

const AutorService = {
    async create(data) {
        try {
            console.log(data)
            const response = await axios.post(`${API_URL}/autor`, data);
            return response.data;
        } catch (error) {
            console.error('Erro ao criar autor:', error);
            throw new Error('Não foi possível criar o autor.');
        }
    }    
};

export default AutorService;