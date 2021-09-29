export const state = () => ({
  appointmentData: null
})

export const getters = {
  getSelectedAppointment: (state) => {
    return state.appointmentData
  }
}

export const mutations = {
  setAppointmentData(state, appointmentData) {
    state.appointmentData = appointmentData
  }
}