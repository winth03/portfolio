<template>
    <div id="container" >
        <header >
            <nav >            
                <NuxtLink >My Portfolio</NuxtLink>
                <ul >
                    <li><NuxtLink to="/"><Icon name="ic:baseline-home"/>Homepage</NuxtLink></li>   
                    <li><NuxtLink to="/tour"><Icon name="ion:bowtie"/>Tour</NuxtLink></li>
                    <li><NuxtLink to="/blog"><Icon name="mdi:document"/>Blog</NuxtLink></li>
                    <li><NuxtLink to="/archive"><Icon name="majesticons:archive"/>Work Archive</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div v-if="scrollPosition > 20" ></div>
        <main >            
            <slot />
        </main>
    </div>
</template>

<script setup>
    import { initFlowbite } from 'flowbite'
    const scrollPosition = ref(0)

    onMounted(() => {
        window.addEventListener('scroll', () => {
            scrollPosition.value = window.scrollY
        })
        initFlowbite()
    })

    onUnmounted(() => {
        window.removeEventListener('scroll')
    })
</script>

<style lang="scss" scoped>
    
</style>