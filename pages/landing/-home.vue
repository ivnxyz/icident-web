<template>
  <section 
    class="h-screen flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover bg-big-smile md:bg-none"
  >
    <!-- Cita principal -->
    <div class="m-8 flex flex-col items-center justify-center flex-grow md:items-start">
      <!-- Texto -->
      <div class="text-white md:text-gray-700 text-right">
        <blockquote class="mb-4 tracking-wide">
          <h1 class="font-serif text-3xl font-semibold">
            "La paz comienza con una sonrisa."
          </h1>
        </blockquote>
        <figcaption class="tracking-wide">
          <p class="font-serif text-lg">
            Madre Teresa de Calcuta
          </p>
        </figcaption>
      </div>
      <!-- CTA -->
      <MainButton class="mt-8 md:mt-16 md:w-full">
        Agenda tu cita ahora
      </MainButton>
    </div>
    <!-- Botón para ver más detalles -->
    <button class="mb-6 flex flex-col items-center text-white md:text-gray-700">
      <p class="text-md tracking-widest"> Descubre nuestros servicios</p>
      <outline-chevron-down-icon class="w-8 h-8" />
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