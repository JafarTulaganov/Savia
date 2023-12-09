export default {
  head: {
    title: 'Savia | Home',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'Savia Home',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Savia Home',
      },
      {
        hid: 'og_title',
        property: 'og:title',
        content: 'Savia',
      },
      {
        property: 'og:site_name',
        content: 'Savia',
      },
      {
        hid: 'og_description',
        property: 'og:description',
        content: 'Savia Home',
      },
      {
        hid: 'og_type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og_url',
        property: 'og:url',
        content: 'https://saviaweb.pythonanywhere.com/api',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/style.css', 'boxicons/css/boxicons.min.css'],

  loading: {
    color: '#E3BA8F',
    height: '3px',
  },

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxt/image'],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'vue-toastification/nuxt',
  ],

  bootstrapVue: {
    icons: true,
  },

  axios: {
    baseURL: 'https://api.saviagroup.uz/api',
    // baseURL: 'https://saviaweb.pythonanywhere.com/api',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  ssr: false,
  build: {
    vendor: ['aos'],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: 'encoding',
        },
      ]
    },
  },

  image: {
    // Options
  },
}
