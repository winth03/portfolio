<template>
    <div class="p-8 rounded-xl bg-white text-black max-w-max">
        <div class="flex flex-row items-center justify-center space-x-4">
            <img class="w-16 h-16 rounded-full" :src="data.avatar_url" />
            <div class="flex flex-col">
                <h1 class="font-bold text-xl">{{ data.name }}</h1>
                <div class="font-bold text-gray-500">{{ data.login }}</div>
                <p>Public Repositories: {{ data.public_repos }}</p>
                <p class="text-gray-500">{{ data.bio }}</p>
            </div>
        </div>
        <div class="flex flex-row items-center justify-center mt-4">
            <NuxtLink class="flex flex-row items-center space-x-2" target="_blank" :to="data.html_url">
                <img class="w-6 h-6" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                <p class="text-gray-500">View on GitHub</p>
            </NuxtLink>
        </div>
    </div>
</template>


<script setup>
    const { username } = defineProps({
        username: {
            type: String,
            required: true
        }
    })
    
    const { data } = useLazyFetch('/api/user',
        {
            query: {
                username: username
            },
            default: () => {
                return {
                    login: 'Loading...',
                    name: 'Loading...',
                    bio: 'Loading...',
                    public_repos: 'Loading...',
                    avatar_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    html_url: ''
                }
            }
        })
</script>

<style lang="scss" scoped>

</style>