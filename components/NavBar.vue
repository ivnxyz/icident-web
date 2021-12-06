<template>
  <nav class="h-16 w-full bg-white fixed top-0 animated z-40 shadow-sm">
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
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900 tracking-wider" to="/#servicios">
              SERVICIOS
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900 tracking-wider" to="/#galeria">
              GALERÍA
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900 tracking-wider" to="/#visita">
              TU VISITA EN ICI
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900 tracking-wider" to="/#nosotros">
              NOSOTROS
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900 tracking-wider" to="/#instalaciones">
              INSTALACIONES
            </NuxtLink>
            <NuxtLink class="text-gray-500 font-medium hover:text-gray-900 tracking-wider" to="/#contacto">
              CONTACTO
            </NuxtLink>
          </div>
        </div>
        <!-- Navegación secundaria -->
        <div class="hidden lg:block">
          <button class="cta-button active:bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium tracking-widest" @click="onCTAClicked">
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
            <a href="#servicios" class="tracking-wide block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              SERVICIOS
            </a>
            <a href="#galeria" class="tracking-wide block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              GALERÍA
            </a>
            <a href="#visita" class="tracking-wide block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              TU VISITA EN ICI
            </a>
            <a href="#nosotros" class="tracking-wide block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              NOSOTROS
            </a>
            <a href="#instalaciones" class="tracking-wide block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              INSTALACIONES
            </a>
            <a href="#contacto" class="tracking-wide block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
              CONTACTO
            </a>
            <a @click="onCTAClicked" class="tracking-wide block w-full px-4 py-2 font-medium tracking-widest text-center text-white whitespace-no-wrap cta-button rounded-lg hover:bg-indigo-600 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out cursor-pointer">
              AGENDA TU CITA AQUÍ
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

<style scoped>
.cta-button {
  background-color: #565D90;
}
</style>