<template>
  <div class="bg-white pt-12 max-w-5xl mx-auto p-6">
    <!-- Selector de especialidad -->
    <h3 class="text-gray-600 font-semibold mt-10">
      Seleccione la especialidad
    </h3>
    <SpecialitySelect class="mt-2" :especialidades="especialidades"/>
  </div>
</template>

<script>
// Importar dependencias
import iciServices from '../services/iciServices'

export default {
  data: () => ({
    especialidades: []
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
  }
}
</script>