<template>
  <section 
    class="h-screen flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover bg-blue-100 md:w-full"
  >
    <!-- Cita principal -->
    <div class="m-8 mb-0 flex flex-col items-center justify-center flex-grow md:items-center md:flex-row md:mt-8">
      <!-- Texto -->
      <div class="text-gray-800 text-right md:w-1/2 md:text-left">
        <blockquote class="mb-4 tracking-wide">
          <h1 class="font-serif text-xl  md:text-3xl font-semibold">
            "La paz comienza con una sonrisa."
          </h1>
        </blockquote>
        <figcaption class="tracking-wide">
          <p class="font-serif text-lg md:text-xl">
            - Madre Teresa de Calcuta
          </p>
        </figcaption>
        <!-- CTA -->
        <MainButton class="hidden md:block mt-8 w-full shadow-lg transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-xl" :isCTA="true">
          Agenda tu cita ahora
        </MainButton>
      </div>
      <!-- Imagen -->
      <img class="mt-4 object-contain object-scale-down max-h-60 md:max-h-80 w-full md:w-1/2" src="https://i.ibb.co/kBgtcT4/pill-smile.png" alt="Mujer sonriendo">
      <!-- CTA -->
      <MainButton class="md:hidden -mt-8 md:mt-16 shadow-lg transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-xl" :isCTA="true">
        Agenda tu cita ahora
      </MainButton>
    </div>
    <!-- Botón para ver más detalles -->
    <a class="mb-6 flex flex-col items-center text-gray-700" href="#servicios">
      <p class="text-sm sm:text-md tracking-widest"> Descubre nuestros servicios</p>
      <outline-chevron-down-icon class="w-4 h-4 sm:w-8 sm:h-8" />
    </a>
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