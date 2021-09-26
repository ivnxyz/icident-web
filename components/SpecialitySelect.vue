<template>
  <div class="flex-auto flex flex-col items-center">
    <div class="flex flex-col items-center relative w-full">
      <div class="w-full">
          <div class="my-2 bg-white p-1 flex border border-gray-200 rounded svelte-1l8159u">
              <div class="flex flex-auto flex-wrap"></div>
              <input :value="selectedSpeciality.nombre" class="p-1 px-2 appearance-none outline-none w-full text-gray-800  svelte-1l8159u">
              <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                  <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none" @click="showList = !showList">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4">
                          <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      <!-- Lista de especialidades -->
      <div v-if="showList" class="absolute shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
          <div class="flex flex-col w-full">
              <div v-for="especialidad in especialidades" :key="especialidad.id" class="cursor-pointer w-full border-gray-100 border-b 
          hover:bg-teal-100 " style="">
                  <button class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 border-teal-600" @click="selectSpeciality(especialidad)">
                      <div class="w-full items-center flex">
                          <div class="mx-2 leading-6">
                            {{ especialidad.nombre }}
                          </div>
                      </div>
                  </button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showList: false,
    selectedSpeciality: {
      id: 1,
      nombre: 'General'
    }
  }),
  props: {
    especialidades: {
      type: Array,
      required: false
    }
  },
  methods: {
    selectSpeciality(speciality) {
      this.selectedSpeciality = {
        id: speciality.id,
        nombre: speciality.nombre
      }

      this.showList = false
    }
  }
}
</script>

<style>
  .top-100 {top: 100%}
  .bottom-100 {bottom: 100%}
  .max-h-select {
      max-height: 300px;
  }
</style>