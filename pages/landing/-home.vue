<template>
  <section 
    class="h-screen flex flex-col items-center justify-center bg-no-repeat bg-center"
    :style="sectionStyle"
  >
    <!-- Cita principal -->
    <div class="m-8 flex flex-col items-center justify-center flex-grow">
      <!-- Texto -->
      <div>
        <blockquote class="mb-4 text-right tracking-wide">
        <h1 class="font-serif text-3xl font-semibold text-white">
          "La paz comienza con una sonrisa."
        </h1>
        </blockquote>
        <figcaption class="text-right tracking-wide">
          <p class="font-serif text-lg text-white">
            Madre Teresa de Calcuta
          </p>
        </figcaption>
      </div>
      <!-- CTA -->
      <MainButton class="mt-8">
        Agenda tu cita ahora
      </MainButton>
    </div>
    <!-- Botón para ver más detalles -->
    <button class="mb-6 flex flex-col items-center">
      <p class="text-white text-md tracking-widest"> Descubre nuestros servicios</p>
      <outline-chevron-down-icon class="w-8 h-8 text-white" />
    </button>
  </section>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    sectionStyle() {
      return "background: url('https://i.ibb.co/3RGncqf/big-smile-shadow.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover;"
    }
  }
}
</script>