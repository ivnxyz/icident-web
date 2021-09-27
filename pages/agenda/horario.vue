<template>
  <div class="bg-white pt-12 max-w-5xl mx-auto p-6">
    <!-- Selector de especialidad -->
    <h3 class="text-gray-600 font-semibold mt-10">
      Seleccione la especialidad
    </h3>
    <SpecialitySelect :especialidades="especialidades" @onSpecialitySelected="onSpecialitySelected" class="mt-2"/>
    <!-- Horarios disponibles -->
    <h3 class="text-gray-600 font-semibold mt-4">
      Seleccione un horario
    </h3>
    <ScheduleDates :schedule="agenda" class="mt-2" />
  </div>
</template>

<script>
// Importar dependencias
import iciServices from '../../services/iciServices'

export default {
  data: () => ({
    especialidades: [],
    agenda: {}
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
      try {
        // Obtener agenda
        const agenda = await iciServices.getSchedule(speciality.id)
        this.agenda = agenda.data
      } catch (err) {
        alert(err.message)
      }
    }
  }
}
</script>