// Importar cliente de la API
import clientAPI from './axiosConfig';

const baseURL = process.env.baseApiUrl;

export default {
  getEspecialidades() {
    return clientAPI(baseURL).get('/especialidades/veracruz');
  },
  getSchedule(id_especialidad) {
    return clientAPI(baseURL).get('/agenda/veracruz/disponible', {
      params: {
        id_especialidad
      }
    })
  },
  savePatient(email, firstName, lastName, phoneNumber) {
    return clientAPI(baseURL).post('/pacientes/veracruz', {
      firstName,
      lastName,
      phoneNumber,
      email
    })
  },
  saveAppointment(idDentista, idEspecialidad, idPaciente, idSillon, fecha, hora) {
    return clientAPI(baseURL).post('/agenda/cita/veracruz', {
      idDentista,
      idEspecialidad,
      idPaciente,
      idSillon,
      fecha,
      hora
    })
  },
  getAppointment(appointmentId) {
    return clientAPI(baseURL).get(`/citas/${appointmentId}`)
  }
}