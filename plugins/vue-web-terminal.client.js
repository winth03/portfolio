import Terminal from 'vue-web-terminal'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Terminal)
  nuxtApp.provide('Terminal', Terminal)
})