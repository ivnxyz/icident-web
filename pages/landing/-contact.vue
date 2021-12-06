<template>
  <section class="text-white footer-background-image py-16 relative">
    <!-- Imagen de puntos -->
    <img class="w-36 h-36 contain absolute -top-14 -right-12 md:w-44 md:h-44 md:-top-20 md:-right-16" src="@/assets/icons/blue-dots.svg" alt="Puntos de adorno">
    <!-- Texto -->
    <div class="max-w-2xl mx-auto relative text-center">
      <!-- Imagen -->
      <img class="absolute left-6 bottom-6 w-4 h-4 md:w-10 md:h-10" src="@/assets/icons/adorno-footer.svg">
      <!-- Información -->
      <h2 class="text-3xl md:text-5xl font-bold tracking-wide">
        ¡CONTÁCTANOS!
      </h2>
      <p class="text-xl md:text-4xl">
        Solicita informes y agenda tu cita
      </p>
    </div>
    <!-- Información -->
    <div class="flex flex-col md:flex-row mt-10 max-w-2xl mx-auto">
      <!-- Lado izquierdo -->
      <div class="w-full md:w-1/2 px-4 md:px-0 text-center md:text-left">
        <!-- Teléfono -->
        <p class="text-md md:text-2xl mb-3">
          <img src="@/assets/icons/phone.svg" class="w-6 h-6 mr-2 inline" alt="Icono de teléfono">Tel. 229 927 3743<br>229 927 3747
        </p>
        <!-- WhatsApp -->
        <p class="text-md md:text-2xl mb-3">
          <img src="@/assets/icons/whatsapp.svg" class="w-6 h-6 mr-2 inline" alt="Icono de WhatsApp">Whatsapp. 229 292 2767
        </p>
      </div>
      <!-- Lado derecho -->
      <div class="w-full md:w-1/2 px-4 md:px-0 flex justify-center md:justify-end">
        <!-- Horario -->
        <p class="text-md md:text-2xl">
          <img src="@/assets/icons/clock.svg" class="w-6 h-6 mr-2 inline" alt="Icono de WhatsApp">Horario:<br>
          Lun a Sáb 09:30 -20:00<br>
          Domingo  Cerrado
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-background-image {
  background-image: url('@/assets/images/footer.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>