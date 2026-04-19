import axios from 'axios'; //importa o axios

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api' // endereço base do backend
});

export default api; 