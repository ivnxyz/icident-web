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
    <ScheduleDates
      v-else-if="agenda"
      :schedule="agenda"
      :startingDate="scheduleStartingDate"
      :endingDate="scheduleEndingDate"
      :currentWeek="currentWeek"
      :maximumWeeks="maximumWeeks"
      class="mt-2"
      @loadSchedule="loadSchedule"
    />
    <!-- Comentario -->
    <h3 class="text-gray-600 font-semibold mt-4 required">
      Platícanos sobre el servicio que necesitas
    </h3>
    <textarea required v-model="comment" class="mt-2 bg-gray-100 rounded border border-gray-200 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Escribe tu comentario' maxlength="250"/>
    <p class="text-right font-medium px-2 py-1 text-xs text-gray-600 w-full">
      {{comment.length}}
    </p>
    <!-- Botón para confirmar cita -->
    <MainButton :loading="generatingAppointment" class="w-full mt-10" @click="saveAppointment">
      Agendar cita
    </MainButton>
  </div>
</template>

<script>
// Importar dependencias
import iciServices from '../../services/iciServices'
import readableDate from '~/mixins/readableDate'
import dayjs from '~/utils/day.js'

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
    agenda: null,
    scheduleStartingDate: null,
    scheduleEndingDate: null,
    currentWeek: 0,
    maximumWeeks: 2,
    comment: ''
  }),
  mixins: [readableDate],
  async asyncData() {
    try {
      // Obtener datos de especialidades
      const especialidadesRes = await iciServices.getEspecialidades()

      return {
        especialidades: especialidadesRes.data.filter(es => es.id === 1)
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

      // Verificar que haya un comentario
      if (!(this.comment.length > 1)) {
        alert("Por favor ingresa tu comentario")
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
        const comment = this.comment

        // Guardar datos de la cita
        const appointmentRes = await iciServices.saveAppointment(
          idDentista,
          idEspecialidad,
          patientId,
          idSillon,
          fecha,
          hora,
          comment
        )

        const appointmentId = appointmentRes.data.id

        // Eliminar información del estado
        this.$store.commit('form/setFormData', null)
        this.$store.commit('schedule/setAppointmentData', null)

        // Redirigir al usuario
        this.$router.push(`/agenda/exito?c=${appointmentId}`)
      } catch (err) {
        // Mostrar error
        alert(err.message)
      }
    },
    async loadSchedule(week) {
      // Mostrar spinner
      this.currentWeek = week
      this.loadingSchedule = true

      try {
        // Obtener el siguiente lunes
        const nextMonday = dayjs().weekday(week * 7)
        const nextWeekEnd = nextMonday.endOf('week').subtract(1, 'day')

        // Asignar las fechas de la agenda
        this.scheduleStartingDate = this.getReadableDate(nextMonday)
        this.scheduleEndingDate = this.getReadableDate(nextWeekEnd)

        // Obtener agenda
        const agenda = await iciServices.getSchedule(this.specialityId, nextMonday.format('YYYY-MM-DD'))
        this.agenda = agenda.data
      } catch (err) {
        alert(err)
      }

      // Ocultar spinner
      this.loadingSchedule = false
    },
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

<style scoped>
.required:after {
  content:" *";
  color: red;
}
</style>