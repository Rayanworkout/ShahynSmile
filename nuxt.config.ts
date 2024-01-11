// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  sourcemap: false,
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'assets/css/style.css'
  ],
  googleFonts: {
    families: {
      Inter: [300, 500],
    },
  },
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
  ]
})
