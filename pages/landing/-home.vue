<template>
  <section class="flex flex-col items-center justify-center header-image header-height">
    <!-- Imagen de puntos -->
    <img class="w-26 h-32 contain absolute -top-10 -right-12 md:-top-8 md:-right-2" src="@/assets/icons/dots.svg" alt="Puntos de adorno">
    <!-- Información (teléfonos) -->
    <div class="px-6 md:hidden flex justify-center mt-4 mb-2 w-full">
      <div class="w-50 text-xs text-white text-left">
        <!-- Dirección -->
        <a href="https://www.google.com/maps/place/ICI+Cl%C3%ADnica+Dental/@19.1580506,-96.1087074,21z/data=!4m5!3m4!1s0x85c3418b052584fb:0x67277dc9da175814!8m2!3d19.1581478!4d-96.1084761" target="_blank" class="mb-3 text-shadow">
          <img src="@/assets/icons/pin.svg" class="w-6 h-6 mr-2 inline" alt="Icono de marcador">Av. Tiburón 160-interior 21,<br>Costa de Oro, 94299<br>Boca del Río, Ver.
        </a>
      </div>
      <div class="w-50 text-xs text-white text-right">
        <!-- Teléfono -->
        <a href="tel:522299273743" target="_blank" class="mb-3 text-shadow">
          <img src="@/assets/icons/phone.svg" class="w-6 h-6 mr-2 inline" alt="Icono de teléfono">Tel. 229 927 3743<br>229 927 3747
        </a>
        <!-- Whatsapp -->
        <p class="text-shadow">
          <img src="@/assets/icons/whatsapp.svg" class="w-6 h-6 mr-2 inline" alt="Icono de WhatsApp">Whatsapp. 229 292 2767
        </p>
      </div>
    </div>
    <!-- Cita principal -->
    <div class="w-full flex-col md:flex-row md:mt-12 flex justify-center items-center flex-grow md:flex-row">
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
      <!-- Información -->
      <div class="hidden flex justify-end px-8 md:block md:w-4/12 lg:w-3/12">
        <div class="text-white text-left">
          <!-- Dirección -->
          <p class="mb-3">
            <img src="@/assets/icons/pin.svg" class="w-6 h-6 mr-2 inline" alt="Icono de marcador">Av. Tiburón 160-interior 21,<br>Costa de Oro, 94299<br>Boca del Río, Ver.
          </p>
          <!-- Teléfono -->
          <p class="mb-3">
            <img src="@/assets/icons/phone.svg" class="w-6 h-6 mr-2 inline" alt="Icono de teléfono">Tel. 229 927 3743<br>229 927 3747
          </p>
          <!-- Whatsapp -->
          <p>
            <img src="@/assets/icons/whatsapp.svg" class="w-6 h-6 mr-2 inline" alt="Icono de WhatsApp">Whatsapp. 229 292 2767
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

.header-height {
  height: calc(100vh - theme('height.16'));
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
}
</style>