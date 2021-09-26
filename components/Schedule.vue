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
          {{ date }}
        </p>
        <!-- Scroll de horarios disponibles -->
        <div class="flex overflow-x-scroll py-4 hide-scroll-bar">
          <section class="flex flex-nowrap">
            <DateChip v-for="slot in Object.keys(schedule[date])" :key="slot" :date="slot" />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
  }
}
</script>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>