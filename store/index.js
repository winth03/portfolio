import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        dark: true,
    }),
    actions: {
        switchTheme() {
            this.dark = !this.dark
        },
    }
})