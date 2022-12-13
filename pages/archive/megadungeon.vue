<template>
    <div class="h-[60vh] main">
        <NuxtLink class="btn m-4 bg-slate-500" target="_blank" to="https://onlinegdb.com/f4F-0AWH5">Source Code</NuxtLink>
        <ClientOnly>       
            <terminal :command-store="commands" :init-log="initLog" context="You" @execCmd="execute" @initComplete="initCmd">
                <template #header><h1 class="text-center text-white bg-slate-500 rounded-t-lg">XxX-Mega Dungeon 2019-XxX</h1></template>
            </terminal>
        </ClientOnly>
    </div>
</template>

<script setup>
    const { $Terminal: Terminal } = useNuxtApp()
    const myAsker = ref()

    const initLog = [
        { content: 'Type "exit" to exit the game and "dungeon" to start a new one.', class: 'info', },
    ]

    const commands = [
        {
            key: 'dungeon',
            description: 'Enter the dungeon',
            title: 'Dungeon',
        }
    ]

    const initCmd = () => {
        Terminal.$api.execute('terminal', 'dungeon')
    }
    
    const execute = async (cmdKey, command, success, failed, name) => {        
        if (cmdKey === 'dungeon') {
            const asker = new Terminal.$Ask()
            myAsker.value = asker
            const { data: { value: message } } = await useFetch('/api/dungeon', { method: 'GET', cache: false })
            success(asker)

            asker.ask({
                question: message,
                autoReview: true,
                callback: async function askerCallback(value) {
                    if (value === 'exit') return asker.finish()
                    const { data: { value: newMessage } } = await useFetch('/api/dungeon', {
                        method: 'POST',
                        cache: false,
                        body: {
                            prompt: value
                        }
                    })
                    if (newMessage) {
                        asker.ask({
                            question: newMessage,
                            autoReview: true,
                            callback: askerCallback
                        })
                    }
                    else {
                        asker.finish()
                    }
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    :deep(div:has(.t-ask-input)) {
        @apply flex-col;
        div {
            @apply break-words;
        }
    }
</style>