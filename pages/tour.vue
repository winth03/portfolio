<template>
    <el-tabs>
        <el-tab-pane :label="item.title" class="mb-4" v-for="(item, index) in items" :key="index">
            <el-carousel height="auto" indicator-position="outside" :interval="5000" :autoplay="false">
                <el-carousel-item style="height: max-content;" v-for="(src, num) in item.src">
                    <el-image fit="scale-down" :src="src" :alt="`image${num}`" />
                </el-carousel-item>
            </el-carousel>
            <div class="flex space-x-2">
                <h2>{{ item.title }}</h2>
                <el-button type="primary" tag="a" target="_blank" :href="item.link" size="large" >Play Here!</el-button>
            </div>
            <span size="large">{{ item.description }}</span>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup>
    import Images from '@/assets/images'
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
</script>
