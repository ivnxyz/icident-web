// Importar cliente de la API
import clientAPI from './axiosConfig';

const branchId = process.env.veracruzBranchId
const baseURL = process.env.baseApiUrl;

export default {
  getEspecialidades() {
    return clientAPI(baseURL).get('/especialidades/');
  },
  getSchedule(specialityId) {
    return clientAPI(baseURL).get(`/agenda/${branchId}/disponible`, {
      params: {
        id_especialidad: specialityId
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
    return clientAPI(baseURL).post(`/agenda/cita/${branchId}`, {
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