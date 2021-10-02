<template>
  <div class="bg-white pt-12 max-w-5xl mx-auto p-6 relative">
    <!-- Selector de especialidad -->
    <h3 class="text-gray-600 font-semibold mt-10">
      Seleccione la especialidad
    </h3>
    <SpecialitySelect :especialidades="especialidades" @onSpecialitySelected="onSpecialitySelected" class="mt-2"/>
    <!-- Horarios disponibles -->
    <h3 class="text-gray-600 font-semibold mt-4">
      Seleccione un horario
    </h3>
    <!-- Spinner -->
    <div v-if="loadingSchedule" class="flex justify-center items-center h-60">
      <Spinner />
    </div>
    <!-- Componente de horarios -->
    <ScheduleDates v-else-if="agenda" :schedule="agenda" class="mt-2" />
    <!-- Botón para confirmar cita -->
    <MainButton :loading="generatingAppointment" class="w-full mt-10" @click="saveAppointment">
      Agendar cita
    </MainButton>
  </div>
</template>

<script>
// Importar dependencias
import iciServices from '../../services/iciServices'

export default {
  validate({ store, redirect }) {
    // Verificar que el usuario haya ingresado su información
    if (store.state.form.userData === null) {
      return redirect('/agenda/formulario')
    }

    return true
  },
  data: () => ({
    specialityId: null,
    especialidades: [],
    loadingSchedule: false,
    generatingAppointment: false,
    agenda: null
  }),
  async asyncData() {
    try {
      // Obtener datos de especialidades
      const especialidadesRes = await iciServices.getEspecialidades()

      return {
        especialidades: especialidadesRes.data
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async onSpecialitySelected(speciality) {
      // Mostrar spinner
      this.loadingSchedule = true

      try {
        // Guardar id de la especialidad
        this.specialityId = speciality.id

        // Obtener agenda
        const agenda = await iciServices.getSchedule(this.specialityId)
        this.agenda = agenda.data
      } catch (err) {
        alert(err.message)
      }

      // Ocultar spinner
      this.loadingSchedule = false
    },
    async savePatient() {
      // Guardar datos del paciente
      const patientRes = await iciServices.savePatient(
        this.userData.email,
        this.userData.firstName,
        this.userData.lastName,
        this.userData.phoneNumber
      )

      return patientRes.data.id
    },
    async saveAppointment() {
      // Verificar que existan los datos de la cita
      if (!this.appointmentData) {
        alert("Selecciona una fecha")
        return
      }

      try {
        // Guardar datos del paciente
        const patientId = await this.savePatient()
        
        // Obtener datos de la cita
        const idDentista = parseInt(this.appointmentData.slotData.id_dentista, 10)
        const idEspecialidad = parseInt(this.specialityId, 10)
        const idSillon = parseInt(this.appointmentData.slotData.id_sillon, 10)
        const fecha = this.appointmentData.date
        const hora = this.appointmentData.time

        // Guardar datos de la cita
        await iciServices.saveAppointment(
          idDentista,
          idEspecialidad,
          patientId,
          idSillon,
          fecha,
          hora
        )

        // Redirigir al usuario
        this.$router.push('/agenda/exito')
      } catch (err) {
        // Mostrar error
        alert(err.message)
      }
    }
  },
  computed: {
    userData() {
      return this.$store.state.form.userData
    },
    appointmentData() {
      return this.$store.state.schedule.appointmentData
    }
  }
}
</script>