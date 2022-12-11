// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'My Portfolio',
            meta: [
                { charset: 'utf-8' },                
            ],
            htmlAttrs: {
                lang: 'en',
            }
        },
    },
    
    css: [
        '~/assets/css/main.css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
        '@nuxt/image-edge',
    ],
    runtimeConfig: {
        githubToken: process.env.GITHUB_TOKEN,
    },
})
