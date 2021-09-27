export const state = () => ({
  formData: null
})

export const mutations = {
  setFormData(state, formData) {
    state.formData = formData
  }
}