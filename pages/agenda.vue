<template>
  <div class="bg-white pt-12">
    <!-- Selector de especialidad -->
    <SpecialitySelect :especialidades="especialidades" class="mt-10"/>
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