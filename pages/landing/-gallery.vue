<template>
  <section>
    <!-- Título -->
    <SectionDivider>
      GALERÍA
    </SectionDivider>
    <!-- Carousel Body -->
    <div class="p-8 md:p-10">
      <div class="relative rounded-lg flex flex-col bg-gray-100 shadow-xl" style="min-height: 19rem;">
        <div class="w-full h-full flex flex-col flex-grow py-8">
          <!-- Texto superior -->
          <div class="flex w-full">
            <p class="text-center font-medium text-gray-500 w-1/2">
              ANTES
            </p>
            <p class="text-center font-medium text-gray-500 w-1/2">
              DESPUÉS
            </p>
          </div>
          <!-- Imagen -->
          <img class="flex-grow object-contain" :src="stories[selectedStory].image" alt="">
          <!-- Parte inferior -->
          <div class="mt-3 text-center flex flex-col md:flex-row items-center w-full">
            <!-- Descripción -->
            <p class="w-full md:w-1/2 font-semibold text-gray-500">
            {{ stories[selectedStory].description }}
            </p>
            <!-- Botón para agendar -->
            <div class="w-full md:w-1/2 flex justify-center mt-3 md:mt-0">
              <button class="bg-blue-500 active:bg-blue-600 text-white px-8 py-4 rounded-full font-medium tracking-widest flex justify-center items-center" @click="onCTAClicked">
                AGENDA TU CITA AQUÍ
              </button>
            </div>
          </div>
        </div>
        <!-- Botón para regresar -->
        <button class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline" @click="onLeftArrowClicked">
          <span class="block" style="transform: scale(-1);">&#x279c;</span>
        </button>
        <!-- Botón para continuar -->
        <button class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline" @click="onRightArrowClicked">
          <span class="block" style="transform: scale(1);">&#x279c;</span>
        </button>
      </div>
    </div>
    <!-- Carousel Tabs -->
    <div class="flex items-center pt-5 justify-between">
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg" alt="" style="max-height: 60px;"></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/slack.svg" alt="" style="max-height: 60px;"></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg" alt="" style="max-height: 60px;"></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg" alt="" style="max-height: 60px;"></button>
      <button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg" alt="" style="max-height: 60px;"></button>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    stories: [
      {
        image: require('@/assets/gallery/carillas.jpg'),
        description: 'ODONTOLOGÍA ESTÉTICA (CARILLAS)'
      },
      {
        image: require('@/assets/gallery/limpieza.jpg'),
        description: 'LIMPIEZA Y BLANQUEAMIENTO DENTAL'
      },
      {
        image: require('@/assets/gallery/ortodoncia.jpg'),
        description: 'TRATAMIENTO DE ORTODONCIA'
      },
      {
        image: require('@/assets/gallery/rinomodelacion.jpg'),
        description: 'RINOMODELACIÓN CON ÁCIDO HIÁLURONICO'
      },
      {
        image: require('@/assets/gallery/perfilacion.jpg'),
        description: 'AUMENTO Y PERFILACIÓN DE LABIOS CON ÁCIDO HIÁLURONICO'
      },
      {
        image: require('@/assets/gallery/estetica.jpg'),
        description: 'ODONTOLOGÍA ESTÉTICA (CARILLAS)'
      }
    ],
    selectedStory: 0
  }),
  methods: {
    onCTAClicked() {
      this.$router.push('/agenda/formulario')
    },
    onRightArrowClicked() {
      if (this.selectedStory + 1 > this.stories.length - 1) {
        this.selectedStory = 0
      } else {
        this.selectedStory += 1
      }
    },
    onLeftArrowClicked() {
      if (this.selectedStory - 1 < 0) {
        this.selectedStory = this.stories.length - 1
      } else {
        this.selectedStory -= 1
      }
    }
  }
}
</script>