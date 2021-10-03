<template>
  <div>
    <!-- Barra de navegación -->
    <NavBar/>
    <!-- Contenido principal -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      link: [
        {
          hid: 'icon',
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://i.ibb.co/tKR9XwY/Logo.png'
        },
        {
          rel: 'mask-icon',
          type: 'image/x-icon',
          color: '#FF76B5',
          href: 'https://i.ibb.co/tKR9XwY/Logo.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'https://i.ibb.co/tKR9XwY/Logo.png'
        }
      ]
    }
  },
}
</script>