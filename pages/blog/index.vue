<template>
    <div >
        <div >
            <h1 >Blogs</h1>
            <ul>
                <li v-for="blog in blogs">
                    <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const {children: blogs} = (await fetchContentNavigation())[0];
</script>

<style lang="scss" scoped>
    
</style>