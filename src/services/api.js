import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});

// 👇 interceptor
api.interceptors.request.use( // cria um interceptor
  async (config) => {
    const token = await AsyncStorage.getItem('token'); // pega o token que você salvou antes

    if (token) { // se existir adiciona no header da requisição
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;