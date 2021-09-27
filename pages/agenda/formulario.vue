<template>
  <div class="bg-white pt-12">
    <!-- Formulario -->
    <form action="" class="form max-w-5xl mx-auto p-6 my-10 relative">
      <h3 class="text-2xl text-gray-900 font-semibold">
        Ya casi tienes tu cita
      </h3>
      <p class="text-gray-600">
        Cuéntanos un poco de ti
      </p>
      <!-- Información del paciente -->
      <div class="flex flex-col md:flex-row md:space-x-5 mt-8">
        <!-- Nombre -->
        <div class="w-full md:w-1/2">
          <label for="first_name" class="block text-xs font-semibold text-gray-600 uppercase mb-2">NOMBRE(S)</label>
          <input type="text" name="first_name" id="first_name" placeholder="Tu nombre" class="border p-2 w-full">
        </div>
        <!-- Apellidos -->
        <div class="w-full md:w-1/2">
          <label for="last_name" class="block text-xs font-semibold text-gray-600 uppercase mb-2 mt-8 md:mt-0">APELLIDOS</label>
          <input type="text" name="last_name" id="last_name" placeholder="Tus apellidos" class="border p-2 w-full">
        </div>
      </div>
      <!-- Número de teléfono -->
      <label for="phone_number" class="block text-xs font-semibold text-gray-600 uppercase mb-2 mt-8">Número de teléfono</label>
      <input type="tel" name="phone_number" id="phone_number" placeholder="Tu número de teléfono" class="border p-2 w-full">
      <!-- Correo electrónico -->
      <label for="email" class="block text-xs font-semibold text-gray-600 uppercase mb-2 mt-8">Correo electrónico</label>
      <input type="email" name="email" id="email" placeholder="Tu correo electrónico" class="border p-2 w-full mt-3 mb-4">
      <!-- Botón para enviar el cuestionario -->
      <input type="submit" value="Continuar" class="w-full mt-6 bg-pink-500 active:bg-pink-600 text-white font-semibold p-3 rounded-lg">
  </form>
  </div>
</template>