// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'My Portfolio',
            meta: [
                { charset: 'utf-8' },
            ],
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' },
            ],
            htmlAttrs: {
                lang: 'en',
            },
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
    ],
    runtimeConfig: {
        githubToken: process.env.GITHUB_TOKEN
    },
})
