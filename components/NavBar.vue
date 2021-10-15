<template>
  <nav class="w-full bg-white fixed top-0 animated z-40 shadow-sm">
    <!-- Contenido de la barra de navegación -->
    <div class="mx-w-7xl px-3 py-3 mx-auto">
      <div class="flex justify-between">
        <div class="flex">
          <!-- Logo -->
          <div class="mr-12">
            <NuxtLink to="/">
              <img class="w-24 h-10" src="@/assets/logo.svg" alt="Logo de ICI">
            </NuxtLink>
          </div>
          <!-- Navegación primaria -->
          <div class="hidden lg:flex items-center space-x-8">
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900" to="/#us">
              Nosotros
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900" to="/#servicios">
              Servicios
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900" to="/#galeria">
              Galería
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900" to="/#cuidados">
              Cuidados del paciente
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900" to="/#contacto">
              Contacto
            </NuxtLink>
          </div>
        </div>
        <!-- Navegación secundaria -->
        <div class="hidden lg:block">
          <button class="bg-indigo-500 active:bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium tracking-widest" @click="onCTAClicked">
            Agenda tu cita
          </button>
        </div>
        <!-- Menú para teléfonos -->
        <div class="lg:hidden flex items-center">
          <button @click="toggleMenu">
            <outline-menu-icon class="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
    <!-- Menú para teléfonos -->
    <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
      <div v-show="isMenuVisible" class="absolute right-0 mr-2">
        <div class="relative py-2 px-2 bg-white border border-gray-200 rounded-md shadow-xl">
          <div class="absolute top-0 right-8 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
          <div class="relative">
            <a href="#us" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              Nosotros
            </a>
            <a href="#servicios" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              Servicios
            </a>
            <a href="#galeria" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              Galería
            </a>
            <a href="#cuidados" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              Cuidados del paciente
            </a>
            <a href="#contacto" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              Contacto
            </a>
            <a @click="onCTAClicked" class="block w-full px-4 py-2 font-medium tracking-widest text-center text-white whitespace-no-wrap bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out cursor-pointer">
              Agenda tu cita
            </a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isMenuVisible: false
  }),
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible
    },
    closeMenu(e) {
      if (!this.$el.contains(e.target)) {
        this.isMenuVisible = false
      }
    },
    onCTAClicked() {
      this.$router.push('/agenda/formulario')
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenu)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu)
  }
}
</script>
