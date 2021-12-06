<template>
  <div class="bg-white p-6">
    <!-- Formulario -->
    <form @submit.prevent="submitForm" class="form max-w-5xl mx-auto my-10 relative">
      <h3 class="text-2xl text-gray-900 font-semibold">
        Ya casi tienes tu cita
      </h3>
      <p class="text-gray-600">
        Cuéntanos un poco de ti
      </p>
      <!-- Información del paciente -->
      <div class="flex flex-col md:flex-row md:space-x-5 mt-8">
        <!-- Nombre -->
        <div class="w-full md:w-1/2">
          <label for="first_name" class="block text-xs font-semibold text-gray-600 uppercase mb-2 required">NOMBRE(S)</label>
          <input v-model="patient.firstName" type="text" name="first_name" id="first_name" placeholder="Tu nombre" class="border p-2 w-full" required>
        </div>
        <!-- Apellidos -->
        <div class="w-full md:w-1/2">
          <label for="last_name" class="block text-xs font-semibold text-gray-600 uppercase mb-2 mt-8 md:mt-0 required">APELLIDOS</label>
          <input v-model="patient.lastName" type="text" name="last_name" id="last_name" placeholder="Tus apellidos" class="border p-2 w-full" required>
        </div>
      </div>
      <!-- Número de teléfono -->
      <label for="phone_number" class="block text-xs font-semibold text-gray-600 uppercase mb-2 mt-8 required">Número de teléfono</label>
      <input v-model="patient.phoneNumber" type="tel" name="phone_number" id="phone_number" placeholder="Tu número de teléfono" class="border p-2 w-full" required>
      <!-- Correo electrónico -->
      <label for="email" class="block text-xs font-semibold text-gray-600 uppercase mb-2 mt-8">Correo electrónico</label>
      <input v-model="patient.email" type="email" name="email" id="email" placeholder="Tu correo electrónico" class="border p-2 w-full mt-3 mb-4">
      <!-- Botón para enviar el cuestionario -->
      <input type="submit" value="Continuar" class="w-full mt-6 bg-pink-500 active:bg-pink-600 text-white font-semibold p-3 rounded-lg cursor-pointer">
  </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    patient: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    }
  }),
  methods: {
    submitForm() {
      // Validar formulario
      if (!this.isFirstNameValid) {
        alert('Por favor ingresa un nombre válido')
        return
      }

      if (!this.isLastNameValid) {
        alert('Por favor ingresa un apellido válido')
        return
      }

      if (!this.isPhoneNumberValid) {
        alert('Por favor ingresa un número de teléfono válido')
        return
      }

      if (this.cleanEmail !== '' && !this.isEmailValid) {
        alert('Por favor ingresa un email válido')
        return
      }

      // Guardar información en el estado
      this.$store.commit('form/setFormData', {
        firstName: this.cleanFirstName,
        lastName: this.cleanLastName,
        phoneNumber: this.cleanPhoneNumber,
        email: this.cleanEmail
      })

      // Redirigir al usuario
      this.$router.push('/agenda/horario')
    },
  },
  computed: {
    cleanFirstName() {
      return this.patient.firstName.trim()
    },
    cleanLastName() {
      return this.patient.lastName.trim()
    },
    cleanPhoneNumber() {
      return this.patient.phoneNumber.trim()
    },
    cleanEmail() {
      return this.patient.email.trim()
    },
    isFirstNameValid() {
      return this.cleanFirstName.replace(/\s+/g, '').length > 0
    },
    isLastNameValid() {
      return this.cleanLastName.replace(/\s+/g, '').length > 0
    },
    isPhoneNumberValid() {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      const digits = this.cleanPhoneNumber.replace(/\D/g, "")
      return phoneRegex.test(digits)
    },
    isEmailValid() {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return emailRegex.test(this.cleanEmail)
    }
  }
}
</script>

<style scoped>
.required:after {
  content:" *";
  color: red;
}
</style>