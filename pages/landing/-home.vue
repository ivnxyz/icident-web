<template>
  <section class="h-screen flex flex-col items-center justify-center header-image">
    <!-- Cita principal -->
    <div class="w-full flex items-center flex-grow md:flex-row md:mt-8">
      <!-- Texto -->
      <div class="text-white text-center md:text-left md:px-12 w-full md:w-8/12 lg:w-9/12">
        <h1 class="text-3xl md:text-5xl font-bold mb-6 md:mb-2">
          ¡Bienvenido!
        </h1>
        <blockquote class="mb-4 tracking-wide">
          <h2 class="font-serif text-2xl md:text-3xl font-semibold">
            La paz comienza<br>con una sonrisa.
          </h2>
        </blockquote>
        <figcaption class="tracking-wide">
          <p class="font-serif text-lg md:text-xl">
            - Madre Teresa de Calcuta
          </p>
        </figcaption>
      </div>
      <!-- Dirección -->
      <div class="hidden flex justify-end px-8 md:block md:w-4/12 lg:w-3/12">
        <div class="text-white text-left">
          <!-- Dirección -->
          <p class="mb-3">
            <outline-location-marker-icon class="w-6 h-6 inline"/> Av. Tiburón 160-interior 21,<br>Costa de Oro, 94299<br>Boca del Río, Ver.
          </p>
          <!-- Teléfono -->
          <p class="mb-3">
            <outline-phone-icon class="w-6 h-6 inline"/>Tel. 229 927 3743<br>229 927 3747
          </p>
          <!-- Whatsapp -->
          <p>
            <outline-chat-icon class="w-6 h-6 inline"/>Whatsapp. 229 292 2767
          </p>
        </div>
      </div>
    </div>
    <!-- Botón para agendar -->
    <div class="mb-16 flex flex-col justify-center">
      <MainButton class="shadow-lg transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-xl tracking-wider" :isCTA="true">
        AGENDA TU CITA AQUÍ
      </MainButton>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    sectionStyle() {
      return "background: url(''); background-repeat: no-repeat; background-position: center; background-size: cover;"
    }
  },
}
</script>

<style scoped>
.header-image {
  background-image: url('@/assets/images/header.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>