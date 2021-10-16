export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ici | Clínica dental',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'La paz comienza con una sonrisa' },
      { property: 'og:image', content: 'https://i.ibb.co/pywL84s/logo.png' },
      { property: 'og:title', content: 'ici | Clínica dental' },
      { property: 'og:description', content: 'La paz comienza con una sonrisa' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#FF76B5' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['@netsells/nuxt-hotjar', { id: '2632405', sv: '6' }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  tailwindcss: {
    config: {
      /* Extend the Tailwind config here */
      variants: {
        extend: {
          backgroundColor: ['active'],
        }
      },
    }
  },

  env: {
    baseApiUrl: process.env.BASE_API_URL || 'http://localhost:3001/api',
    veracruzBranchId: process.env.ID_BOCA_DEL_RIO
  },

  googleAnalytics: {
    id: 'UA-210368582-1'
  }
}
