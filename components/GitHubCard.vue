<template>
    <div >
        <div >
            <img  />
            <div >
                <h1 >{{ data.name }}</h1>
                <div >{{ data.login }}</div>
                <p>Public Repositories: {{ data.public_repos }}</p>
                <p >{{ data.bio }}</p>
            </div>
        </div>
        <div >
            <NuxtLink >
                <img  />
                <p >View on GitHub</p>
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