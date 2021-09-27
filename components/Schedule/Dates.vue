<template>
  <section>
    <!-- Header -->
    <div class="border-b-4 border-gray-300 py-6">
      <!-- Fechas de la semana -->
      <h4 class="text-center tracking-widest font-bold text-gray-800">
        ESTA SEMANA
      </h4>
    </div>
    <!-- Días -->
    <div>
      <div class="py-4 border-b-2 border-gray-200" v-for="date in sortedDates" :key="date">
        <!-- Fecha -->
        <p class="text-gray-800 font-bold">
          {{ getReadableDate(date) }}
        </p>
        <!-- Scroll de horarios disponibles -->
        <div class="flex overflow-x-scroll py-4 hide-scroll-bar">
          <section class="flex flex-nowrap">
            <ScheduleDateChip v-for="slot in Object.keys(schedule[date])" :key="slot" :date="slot" />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importar dependencias
import dayjs from '../../utils/day'

export default {
  props: {
    schedule: {
      type: Object,
      required: false
    }
  },
  data: () => ({
    sortedDates: [],
  }),
  mounted() {
    this.sortedDates = Object.keys(this.schedule)
  },
  methods: {
    capitalize(str) {
      const firstLetter = str[0].toUpperCase()
      return firstLetter + str.slice(1)
    },
    getReadableDate(date) {
      return this.capitalize(dayjs(date, 'YYYY-MM-DD').format('dddd D'))
    }
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