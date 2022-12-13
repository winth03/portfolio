import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        response: '',
        input: '',
        exit: false,
    }),
    actions: {
        setResponse(value) {
            this.response = value
        },
        setInput(value) {
            this.input = value
        },
        exit() {
            this.exit = true
        }
    }
})