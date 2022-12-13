<template>
    <div class="main">
        <div class="content">
            <h1 class="font-bold text-2xl text-center">Highlighted Works</h1>
            <template v-for="[key, value] of Object.entries(slideContent)">
                <section class="text-center">
                    <div class="block sm:flex">
                        <img :src="value.img[0]" width="400" alt="img.png" />
                        <img :src="value.img[1]" width="400" alt="img1.png" />
                    </div>
                    <h3 class="font-bold my-4">{{ value.title }}</h3>
                    {{ value.desc }} <NuxtLink class="text-blue-500" target="_blank" :to="value.link">Play Here</NuxtLink>
                </section>
            </template>
        </div>
    </div>
</template>

<script setup>
    import Images from '@/assets/images'

    const slideIndex = ref(0)
    const slideContent = {
        0: {
            title: 'Trash Hero',
            img: [Images.trashHero, Images.trashHero1],
            desc: "A personal project made for school's computer subject. Made in Unity.",
            link: 'https://winth03.itch.io/trash-hero?password=AraiGoDai'
        },
        1: {
            title: 'Fox Hollow',
            img: [Images.foxHollow, Images.foxHollow1],
            desc: "A project made for 'MyFirstGameJam2022'. Made in Unity.",
            link: 'https://reondale.itch.io/fox-hollow-demo'
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        @apply max-w-5xl space-y-8;
    }
</style>