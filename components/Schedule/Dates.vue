<template>
  <!-- Componente si hay fechas disponibles -->
  <section>
    <!-- Header -->
    <div class="flex flex-row justify-between border-b-4 border-gray-300 py-6">
      <!-- Botón para la semana pasada -->
      <button :class="currentWeek === 0 ? 'invisible' : ''" @click="onShowPreviousWeek">
        <outline-chevron-left-icon class="w-8 h-8" />
      </button>
      <!-- Fechas de la semana -->
      <h4 class="text-center tracking-widest font-bold text-gray-800">
        {{ currentWeek === 0 ? 'ESTA SEMANA' : `${startingDate} - ${endingDate}`}}
      </h4>
      <!-- Botón para la siguiente semana -->
      <button :class="currentWeek === maximumWeeks ? 'invisible' : ''" @click="onShowNextWeek">
        <outline-chevron-right-icon class="w-8 h-8" />
      </button>
    </div>
    <!-- Días -->
    <div v-if="sortedDates.length > 0">
      <div class="py-4 border-b-2 border-gray-200" v-for="date in sortedDates" :key="date">
        <!-- Fecha -->
        <p class="text-gray-800 font-bold">
          {{ getReadableDate(date) }}
        </p>
        <!-- Scroll de horarios disponibles -->
        <div class="flex overflow-x-scroll py-4 hide-scroll-bar">
          <section class="flex flex-nowrap">
            <ScheduleDateChip
              v-for="slot in Object.keys(schedule[date])"
              :key="slot" :date="slot"
              :isSelected="isSelectedAppointment(date, slot)"
              @click="selectedSlot => toggleSlot(date, selectedSlot)"
            />
          </section>
        </div>
      </div>
    </div>
    <!-- Mensaje si no hay fechas -->
    <div v-else class="mt-10 text-opacity-50">
      <p class="text-center text-gray-600">No hay horarios disponibles</p>
    </div>
  </section>
</template>

<script>
// Importar dependencias
import readableDate from '~/mixins/readableDate'
import { mapGetters } from "vuex";

export default {
  props: {
    schedule: {
      type: Object,
      required: false
    },
    startingDate: {
      type: String,
      required: false
    },
    endingDate: {
      type: String,
      required: false
    },
    currentWeek: {
      type: Number,
      required: true
    },
    maximumWeeks: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    sortedDates: [],
  }),
  mixins: [readableDate],
  mounted() {
    this.sortedDates = this.sortDates(Object.keys(this.schedule))
  },
  methods: {
    toggleSlot(date, slot) {
      // Decidir qué información guardar
      const appointmentData = !this.isSelectedAppointment(date, slot) ? {
        date,
        time: slot,
        slotData: this.schedule[date][slot]
      } : null
      
      // Guardar información en el estado
      this.$store.commit('schedule/setAppointmentData', appointmentData)
    },
    isSelectedAppointment(date, slot) {
      if (this.getSelectedAppointment === null) {
        return false
      }

      // Obtener datos de la cita
      const selectedDate = this.getSelectedAppointment.date
      const selectedTime = this.getSelectedAppointment.time

      return date === selectedDate && slot === selectedTime
    },
    onShowPreviousWeek() {
      this.$emit('loadSchedule', this.currentWeek - 1)
    },
    onShowNextWeek() {
      this.$emit('loadSchedule', this.currentWeek + 1)
    }
  },
  computed: {
    ...mapGetters("schedule", ["getSelectedAppointment"])
  }
}
</script>

<style scoped>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>