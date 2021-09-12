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
        <img class="w-32 h-32 rounded-lg w-full object-cover" :src="service.imageUrl" alt="Persona sonriendo">
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
        imageUrl: 'https://source.unsplash.com/1AhGNGKuhR0/640x426',
        url: 'limpieza'
      },
      {
        title: 'Guardas',
        imageUrl: 'https://source.unsplash.com/Pc0ToyoR5Xo/640x426',
        url: 'guardas'
      },
      {
        title: 'Extracción de terceros molares',
        imageUrl: 'https://source.unsplash.com/pq918sjh894/640x426',
        url: 'teceros_molares'
      },
      {
        title: 'Odontología general',
        imageUrl: 'https://source.unsplash.com/wm4DuvIpLj8/640x426',
        url: 'odontologia_general'
      },
      {
        title: 'Endodoncia',
        imageUrl: 'https://source.unsplash.com/b5zPZ8_7vhw/640x426',
        url: 'endodoncia'
      },
      {
        title: 'Ortodoncia',
        imageUrl: 'https://source.unsplash.com/Q_o_ob-3Ny4/640x426',
        url: 'ortodoncia'
      },
      {
        title: 'Ortopedia',
        imageUrl: 'https://source.unsplash.com/1fy0kwwfBRE/640x426',
        url: 'ortopedia'
      },
      {
        title: 'Odontopediatría',
        imageUrl: 'https://source.unsplash.com/-uERpM5kXKI/640x426',
        url: 'odontopediatria'
      },
      {
        title: 'Odontología cosmética',
        imageUrl: 'https://source.unsplash.com/3ExPoluud54/640x426',
        url: 'odontologia_cosmetica'
      }
    ]
  }),
  methods: {
    goToServiceDetails(serviceUrl) {
      this.$router.push('/servicios/' + serviceUrl)
    }
  }
}
</script>

<style>

</style>