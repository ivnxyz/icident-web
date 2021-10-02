export const state = () => ({
  userData: null
})

export const mutations = {
  setFormData(state, userData) {
    state.userData = userData
  }
}