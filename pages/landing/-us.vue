<template>
  <section class="p-8 md:p-10 flex flex-col md:flex-row">
    <!-- Texto -->
    <div class="w-full md:w-5/12 text-center text-gray-900 md:text-left md:pr-10">
      <!-- Título -->
      <h2 class="text-xl md:text-3xl font-bold text-gray-500 tracking-wider">
        <img class="w-24 h-10 object-contain inline" src="@/assets/logo-flowers.png" alt="Logo de ICI"> NOSOTROS
      </h2>
      <!-- Descripción -->
      <p class="mt-8">
        Somos parte de una red de clínicas dentales en el sur del país <b class="font-semibold">con más de 10 años de experiencia</b>, enfocados en la atención al paciente y con la misión de ofrecer <b class="font-semibold">la mejor calidad en nuestros servicios y productos a precios justos.</b>
      </p>
      <p class="mt-4">
        Lo que nos ha llevado a posicionarnos y ganar la confianza y recomendación de nuestros pacientes.
      </p>
      <p class="mt-4">
        Hemos sido <b class="font-semibold">reconocidos y premiados</b> por organismos <b class="font-semibold">nacionales e internacionales</b> encargados de evaluar la innovación en el sector salud.
      </p>
      <p class="mt-4">
        <b class="font-semibold">¡Estaremos muy contentos de recibirte en nuestros consultorios!</b>
      </p>
    </div>
    <!-- Imágenes de premios -->
    <div class="w-full grid gap-2 md:gap-4 place-content-center md:w-4/12 grid grid-cols-2 grid-rows-2 mt-20 md:mt-0">
      <!-- Innovator -->
      <article class="text-center flex flex-col items-center">
        <!-- Año -->
        <p class="text-3xl font-light text-gray-500">
          2015
        </p>
        <!-- Texto -->
        <p class="text-sm text-gray-900">
          Ganador del premio<br><b>INNOVATOR</b> por la<br><b>Red Internacional Innovator</b>
        </p>
        <!-- Imagen -->
        <img class="w-32 h-35 object-contain rounded-lg" src="@/assets/awards/innovator.png" alt="Premio Innovator">
      </article>
      <!-- UBS -->
      <article class="text-center flex flex-col items-center">
        <!-- Año -->
        <p class="text-3xl font-light text-gray-500">
          2017
        </p>
        <!-- Texto -->
        <p class="text-sm text-gray-900">
          Ganador del premio<br><b>UBS (United Bonus of<br>Switzerland) Visionaris</b>
        </p>
        <!-- Imagen -->
        <img class="w-32 h-35 object-contain rounded-lg" src="@/assets/awards/ubs.png" alt="Premio UBS">
      </article>
      <!-- Ashoka -->
      <article class="text-center flex flex-col items-center">
        <!-- Año -->
        <p class="text-3xl font-light text-gray-500">
          2013
        </p>
        <!-- Texto -->
        <p class="text-sm text-gray-900">
          <b>Miembro de la<br>Red Internacional<br>de emprendedores<br>sociales Ashoka</b>
        </p>
        <!-- Imagen -->
        <img class="w-28 h-28 object-contain rounded-lg" src="@/assets/awards/ashoka.png" alt="Premio Ashoka">
      </article>
      <!-- Expansión -->
      <article class="text-center flex flex-col items-center">
        <!-- Año -->
        <p class="text-3xl font-light text-gray-500">
          2013
        </p>
        <!-- Texto -->
        <p class="text-sm text-gray-900">
          Finalista en el concurso<br>emprendedores Expansión
        </p>
        <!-- Imagen -->
        <img class="w-36 h-36 object-contain rounded-lg" src="@/assets/awards/expansion.png" alt="Premio Expansión">
      </article>
    </div>
    <!-- Sello -->
    <div class="hidden md:flex md:w-3/12 items-center justify-center">
      <img class="mx-8 object-contain" src="@/assets/icons/stamp.svg" alt="Sello de +10 años de experiencia">
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>