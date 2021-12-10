<template>
  <section class="min-h-screen py-12 text-gray-800">
    <!-- Modal con la información -->
    <ServiceModal :showModal="showModal" :service="selectedService" @close-modal="closeModal" />
    <!-- Título -->
    <SectionDivider>
      SERVICIOS ICI
    </SectionDivider>
    <!-- Servicios -->
    <div class="relative w-full">
      <!-- Puntos azules -->
      <img class="w-1/6 md:w-1/12 contain absolute -mt-6 top-1/4 -left-4" src="@/assets/icons/blue-dots.svg" alt="Puntos azules de decoración">
      <img class="w-1/6 md:w-1/12 contain absolute -mt-6 bottom-0 right-3" src="@/assets/icons/blue-dots.svg" alt="Puntos azules de decoración">
      <!-- Lista de servicios -->
      <div class="grid mt-10 gap-5 grid-cols-2 md:grid-cols-4 px-4 md:px-12">
        <article class="text-center rounded-lg flex flex-col cursor-pointer transition-all duration-400 transform hover:scale-105 cursor-pointer" v-for="service in services" :key="service.title" @click="toggleModal(service)">
          <!-- Imagen -->
          <img class="w-32 h-42 w-full object-contain" :src="service.imageUrl" alt="Persona sonriendo">
          <!-- Título -->
          <div class="flex flex-grow items-center justify-center my-2">
            <h3 class="mt-2 text-gray-80">
              {{ service.title }}
            </h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        title: 'Limpieza dental',
        imageUrl: require('@/assets/services/limpieza-dental.png'),
        url: 'limpieza'
      },
      {
        title: 'Guardas',
        imageUrl: require('@/assets/services/guardas.png'),
        url: 'guardas'
      },
      {
        title: 'Extracción de terceros molares',
        imageUrl: require('@/assets/services/extraccion-de-terceros-molares.png'),
        url: 'teceros_molares'
      },
      {
        title: 'Odontología general',
        imageUrl: require('@/assets/services/odontologia-general.png'),
        url: 'odontologia_general'
      },
      {
        title: 'Endodoncia',
        imageUrl: require('@/assets/services/endodoncia.png'),
        url: 'endodoncia'
      },
      {
        title: 'Ortodoncia',
        imageUrl: require('@/assets/services/ortodoncia.png'),
        url: 'ortodoncia'
      },
      {
        title: 'Ortopedia',
        imageUrl: require('@/assets/services/ortopedia.png'),
        url: 'ortopedia'
      },
      {
        title: 'Odontopediatría',
        imageUrl: require('@/assets/services/odontopediatria.png'),
        url: 'odontopediatria'
      },
      {
        title: 'Odontología cosmética',
        imageUrl: require('@/assets/services/odontologia-cosmetica.png'),
        url: 'odontologia_cosmetica'
      },
      {
        title: 'Implantes dentales',
        imageUrl: require('@/assets/services/implantes-dentales.png'),
        url: 'implantes'
      }
    ],
    showModal: false,
    selectedService: null
  }),
  methods: {
    goToServiceDetails(serviceUrl) {
      this.$router.push('/servicios/' + serviceUrl)
    },
    toggleModal(service) {
      this.selectedService = service
      this.showModal = !this.showModal
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style>

</style>