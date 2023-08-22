<template>
    <div >
        <div >
            <div
                v-for="(item, index) in items"
                :key="index"
            >
                <div >
                    <img v-for="(src, num) in item.src" :src="src" :alt="`image${num}`"
                    >
                </div>
            </div>            
        </div>
        <div >
            <button >Prev</button>
            <NuxtLink :to="items[activeIndex].link" >Play Here!</NuxtLink>
            <button >Next</button>
        </div>    
        <div >
            <h1 >{{ items[activeIndex].title }}</h1>
            <p >{{ items[activeIndex].description }}</p>
        </div>
    </div>
</template>

<script setup>
    import Images from '@/assets/images'

    const activeIndex = ref(0)
    const activeImg = ref(0)
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
        activeImg.value = 0
        activeIndex.value = (activeIndex.value - 1) % items.length
    }
    const next = () => {
        activeImg.value = 0
        activeIndex.value = (activeIndex.value + 1) % items.length
    }

    onMounted(() => {
        setInterval(() => {
            activeImg.value = activeImg.value === items[activeIndex.value].src.length - 1 ? 0 : activeImg.value + 1
        }, 5000)
    })
</script>