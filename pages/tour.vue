<template>
    <div class="main">
        <div class="relative w-full h-64">
            <div
                v-for="(item, index) in items"
                :key="index"
                :class="`absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out min-w-max ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`"
            >
                <div class="w-full h-full object-contain flex justify-center space-x-4">
                    <img v-for="(src, num) in item.src" :src="src" :alt="`image${num}`">
                </div>
            </div>            
        </div>
        <div class="flex w-full max-w-5xl mt-8 justify-around">
            <button class="btn" @click="prev">Prev</button>
            <NuxtLink :to="items[activeIndex].link" class="btn bg-[#fa5c5c]" target="_blank">Play Here!</NuxtLink>
            <button class="btn" @click="next">Next</button>
        </div>    
        <div class="mt-8 text-center">
            <h1 class="text-4xl font-bold">{{ items[activeIndex].title }}</h1>
            <p class="text-2xl">{{ items[activeIndex].description }}</p>
        </div>
    </div>
</template>

<script setup>
    import Images from '@/assets/images'

    const activeIndex = ref(0)
    const items = [
        {
            src: [Images.trashHero, Images.trashHero1],
            title: 'Trash Hero',
            description: "A personal project made for school's computer subject. Made in Unity.",
            link: 'https://winth03.itch.io/trash-hero?password=AraiGoDai'
        },
        {
            src: [Images.foxHollow, Images.foxHollow1],
            title: 'Fox Hollow',
            description: "A project made for 'MyFirstGameJam2022'. Made in Unity.",
            link: 'https://reondale.itch.io/fox-hollow-demo'
        },
    ]
    const prev = () => {
        activeIndex.value = activeIndex.value === 0 ? items.length - 1 : activeIndex.value - 1
    }
    const next = () => {
        activeIndex.value = activeIndex.value === items.length - 1 ? 0 : activeIndex.value + 1
    }
</script>