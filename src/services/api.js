import axios from 'axios';

// Declarando a base da API
const api = axios.create({
    baseURL: 'https://bobsburgers-api.herokuapp.com/',
});

export default api;