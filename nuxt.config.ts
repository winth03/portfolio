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
            link: [
                { rel:"preconnect", href:"https://fonts.googleapis.com" },
                { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:"" },
                { href:"https://fonts.googleapis.com/css2?family=Roboto&family=Varela+Round&display=swap", rel:"stylesheet"}
            ]
        }
    },
    content: {
        markdown: {
            toc: {
                searchDepth: 3,
            },
        },
        highlight: {
            preload: [
              'c',
              'cpp',
            ]
        },
    },
    css: [
        '~/assets/css/main.css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/content',
        '@element-plus/nuxt',
    ],
    runtimeConfig: {
        githubToken: process.env.GITHUB_TOKEN
    },
})
