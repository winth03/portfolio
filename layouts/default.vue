<template>
    <div id="container" class="flex flex-col min-h-screen">
        <header class="flex flex-row w-full p-8 justify-center items-center">
            <nav class="container flex flex-row items-center justify-center">            
                <NuxtLink class="title" to="/">My Portfolio</NuxtLink>
                <ul class="nav-buttons">
                    <li><NuxtLink to="/"><Icon name="ic:baseline-home"/>Homepage</NuxtLink></li>   
                    <li><NuxtLink to="/tour"><Icon name="ion:bowtie"/>Tour</NuxtLink></li>
                    <li><NuxtLink to="/archive"><Icon name="majesticons:archive"/>Work Archive</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <main class="flex-grow relative overflow-hidden">            
            <slot />
        </main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .title {
        @apply text-2xl font-bold mx-4;
    }

    .nav-buttons {
        @apply flex flex-row space-x-4 justify-center;
        li {
            @apply transition-fontsize;
        }
        li:hover:not(:has(.router-link-exact-active)) {
            @apply text-2xl;
        }
        li:has(.router-link-exact-active) {
            @apply text-gray-500;
        }
    }
</style>