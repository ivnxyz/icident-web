<template>
  <div v-if="appointment" class="h-screen w-screen flex flex-col justify-center items-center">
    <!-- Título -->
    <h1 class="block text-green-600 font-bold text-xl mb-4">
      ¡Se agendó tu cita!
      <outline-check-icon class="w-10 h-10 sm:w-8 sm:h-8 text-green-600 inline" />
    </h1>
    <!-- Información de la cita -->
    <div class="text-gray-800 font-medium text-lg w-3/4">
      <!-- Dirección de la clínica -->
      <p class="text-pink-500 border-b-2 pb-2 mb-3 w-full">
        <a href="https://www.google.com/maps/place/ICI+Cl%C3%ADnica+Dental/@19.1580506,-96.1087074,21z/data=!4m5!3m4!1s0x85c3418b052584fb:0x67277dc9da175814!8m2!3d19.1581478!4d-96.1084761" target="_blank">
          <outline-location-marker-icon class="w-8 h-8 inline" />
          ICI Clínica dental
        </a>
      </p>
      <!-- Nombre del dentista -->
      <p class="border-b-2 pb-2 mb-3">
        <outline-user-icon class="w-8 h-8 inline" />
        Dentista: {{ appointment.nombre_dentista }}
      </p>
      <!-- Nombre del paciente -->
      <p class="border-b-2 pb-2 mb-3">
        <outline-emoji-happy-icon class="w-8 h-8 inline" />
        Paciente: {{ appointment.nombre_paciente }}
      </p>
      <!-- Fecha y hora -->
      <p class="border-b-2 pb-2 mb-3">
        <outline-clock-icon class="w-8 h-8 inline" />
        {{ getReadableDate(`${appointment.fecha} ${appointment.hora_inicio}`) }}
      </p>
    </div>
  </div>
</template>

<script>
// Importar dependencias
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import iciServices from '../../services/iciServices'

// Configurar dayjs
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)

export default {
  data: () => ({
    appointment: null
  }),
  async mounted() {
    // Obtener datos de la cita
    const appointmentId = this.$route.query.c
    this.appointment = (await iciServices.getAppointment(appointmentId)).data
  },
  methods: {
    getReadableDate(strDate) {
      return dayjs.tz(strDate, 'America/Mexico_City').format('dddd, MMMM D, h:mm A')
    }
  }
}
</script>

<style>

</style>