// Importar dependencias
import axios from 'axios';

// Crear cliente para la API
const clientAPI = url =>
  axios.create({
    baseURL: url,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

export default clientAPI;