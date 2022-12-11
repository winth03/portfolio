<template>
    <div class="main">
        <div class="content">
            <h1 class="font-bold text-2xl text-center">Highlighted Works</h1>
            <template v-for="[_, value] of Object.entries(slideContent)">
                <section class="text-center">
                    <div class="block sm:flex">
                        <nuxt-img :src="`/images/${value.class}.png`" sizes="sm:100vw md:50vw lg:400px" :alt="`${value.class}.png`" />
                        <nuxt-img :src="`/images/${value.class}1.png`" sizes="sm:100vw md:50vw lg:400px" :alt="`${value.class}1.png`" />
                    </div>
                    <h3 class="font-bold my-4">{{ value.title }}</h3>
                    {{ value.desc }} <NuxtLink class="text-blue-500" target="_blank" :to="value.link">Play Here</NuxtLink>
                </section>
            </template>
        </div>
    </div>
</template>

<script setup>
    const slideIndex = ref(0)
    const slideContent = {
        0: {
            title: 'Trash Hero',
            class: 'trash-hero',
            desc: "A personal project made for school's computer subject. Made in Unity.",
            link: 'https://winth03.itch.io/trash-hero?password=AraiGoDai'
        },
        1: {
            title: 'Fox Hollow',
            class: 'fox-hollow',
            desc: "A project made for 'MyFirstGameJam2022'. Made in Unity.",
            link: 'https://reondale.itch.io/fox-hollow-demo'
        }
    }

    const switchSlide = () => {
        slideIndex.value = (slideIndex.value + 1) % 2
    }
</script>

<style lang="scss" scoped>
    .main {
        @apply w-screen p-4 flex flex-col items-center;
    }

    .content {
        @apply max-w-5xl space-y-8;
    }
</style>