<template>
  <section class="min-h-screen pt-24 py-12 px-4 font-bold text-gray-800 max-w-5xl mx-auto">
    <!-- Título -->
    <h2 class="text-xl md:text-3xl text-center">
      Servicios ICI
    </h2>
    <!-- Servicios -->
    <div class="grid mt-10 gap-5 grid-cols-2 md:grid-cols-4">
      <article class="bg-white p-4 text-center rounded-lg shadow-lg flex flex-col cursor-pointer transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-xl" v-for="service in services" :key="service.title" @click="goToServiceDetails(service.url)">
        <!-- Imagen -->
        <img class="w-32 h-32 rounded-lg w-full object-cover" src="https://i.ibb.co/vzYQFM4/jonathan-daniels-Cd-VG9f96kyg-unsplash.jpg" alt="Persona sonriendo">
        <!-- Título -->
        <div class="flex flex-grow items-center justify-center my-2">
          <h3 class="mt-2 text-gray-80">
            {{ service.title }}
          </h3>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        title: 'Limpieza dental',
        imageUrl: '',
        url: ''
      },
      {
        title: 'Guardas',
        imageUrl: '',
        url: ''
      },
      {
        title: 'Extracción de terceros molares',
        imageUrl: '',
        url: ''
      },
      {
        title: 'Odontología general',
        imageUrl: '',
        url: ''
      },
      {
        title: 'Endodoncia',
        imageUrl: '',
        url: ''
      },
      {
        title: 'Ortodoncia',
        imageUrl: '',
        url: ''
      },
      {
        title: 'Ortopedia',
        imageUrl: '',
        url: ''
      },
      {
        title: 'Odontopediatría',
        imageUrl: '',
        url: ''
      },
      {
        title: 'Odontología cosmética',
        imageUrl: '',
        url: ''
      }
    ]
  }),
  methods: {
    goToServiceDetails(serviceUrl) {
      console.log(serviceUrl)
    }
  }
}
</script>

<style>

</style>