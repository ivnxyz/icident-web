// Importar cliente de la API
import clientAPI from './axiosConfig';

const baseURL = 'http://localhost:3001/api';

export default {
  getEspecialidades() {
    return clientAPI(baseURL).get('/especialidades/veracruz');
  },
}