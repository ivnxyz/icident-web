// Importar cliente de la API
import clientAPI from './axiosConfig';

const branchId = process.env.veracruzBranchId
const baseURL = process.env.baseApiUrl;

export default {
  getEspecialidades() {
    return clientAPI(baseURL).get('/especialidades/');
  },
  getSchedule(specialityId, startingDate) {
    return clientAPI(baseURL).get(`/agenda/${branchId}/disponible`, {
      params: {
        id_especialidad: specialityId,
        fecha_inicio: startingDate || undefined
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
  saveAppointment(idDentista, idEspecialidad, idPaciente, idSillon, fecha, hora, comentario) {
    return clientAPI(baseURL).post(`/agenda/cita/${branchId}`, {
      idDentista,
      idEspecialidad,
      idPaciente,
      idSillon,
      fecha,
      hora,
      comentario
    })
  },
  getAppointment(appointmentId) {
    return clientAPI(baseURL).get(`/citas/${appointmentId}`)
  }
}