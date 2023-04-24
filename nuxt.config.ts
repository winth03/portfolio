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
            },
        },
    },
    css: [
        '~/assets/css/main.css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icon',
    ],
    runtimeConfig: {
        githubToken: process.env.GITHUB_TOKEN,
        nodeEnv: process.env.NODE_ENV
    },
})
