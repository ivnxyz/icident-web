<template>
  <section 
    class="h-screen flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover bg-blue-100"
  >
    <!-- Cita principal -->
    <div class="m-8 mb-0 flex flex-col items-center justify-center flex-grow md:items-start">
      <!-- Texto -->
      <div class="text-gray-700 text-right">
        <blockquote class="mb-4 tracking-wide">
          <h1 class="font-serif text-xl font-semibold">
            "La paz comienza con una sonrisa."
          </h1>
        </blockquote>
        <figcaption class="tracking-wide">
          <p class="font-serif text-lg">
            - Madre Teresa de Calcuta
          </p>
        </figcaption>
      </div>
      <!-- Imagen -->
      <img class="mt-4 object-contain object-scale-down max-h-60 w-full" src="https://i.ibb.co/kBgtcT4/pill-smile.png" alt="Mujer sonriendo">
      <!-- CTA -->
      <MainButton class="-mt-8 md:mt-16 md:w-full shadow-lg">
        Agenda tu cita ahora
      </MainButton>
    </div>
    <!-- Botón para ver más detalles -->
    <button class="mb-6 flex flex-col items-center text-gray-700">
      <p class="text-sm sm:text-md tracking-widest"> Descubre nuestros servicios</p>
      <outline-chevron-down-icon class="w-4 h-4 sm:w-8 sm:h-8" />
    </button>
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
  }
}
</script>