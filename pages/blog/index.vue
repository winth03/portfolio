<template>
    <div class="main">
        <div class="content">
            <h1 class="title">Blogs</h1>
            <ul>
                <li v-for="blog in blogs">
                    <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
var blogs = await queryContent('/blog').find();
</script>

<style lang="scss" scoped>
    
</style>