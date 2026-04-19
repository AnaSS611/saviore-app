import axios from 'axios'; //importa o axios

const api = axios.create({
  baseURL: 'http://localhost:8000/api' // define o endereço base do backend
});

export default api; // permite usar o api em outros arquivos