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
    <MainButton class="w-full mt-10">
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
    especialidades: [],
    loadingSchedule: false,
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
        // Obtener agenda
        const agenda = await iciServices.getSchedule(speciality.id)
        this.agenda = agenda.data
      } catch (err) {
        alert(err.message)
      }

      // Ocultar spinner
      this.loadingSchedule = false
    }
  }
}
</script>