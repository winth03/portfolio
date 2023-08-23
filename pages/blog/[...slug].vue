<template>
    <el-container direction="vertical">
        <el-header><el-page-header @back="navigateTo('/blog')">
            <template #breadcrumb>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item><NuxtLink to="/blog">Blog</NuxtLink></el-breadcrumb-item>
                    <el-breadcrumb-item>{{ path }}</el-breadcrumb-item>
                </el-breadcrumb>
            </template>
            <template #content>
                <el-text size="large" tag="b">{{ doc.title }}</el-text>
            </template>
        </el-page-header></el-header>
        <el-container>
            <el-aside width="min-content" v-if="topics" class="hidden md:block">
                <h4>Table of Contents</h4>
                <el-menu background-color="#545c64">
                    <template v-for="topic in topics">
                        <el-sub-menu :index="topic.id" v-if="topic.children">
                            <template #title>
                                <NuxtLink :to="`/blog/${path}#${topic.id}`">{{ topic.text }}</NuxtLink>
                            </template>
                            <el-menu-item v-for="subTopic in topic.children">
                                <NuxtLink :to="`/blog/${path}#${subTopic.id}`">{{ subTopic.text }}</NuxtLink>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-else>
                            <NuxtLink :to="`/blog/${path}#${topic.id}`">{{ topic.text }}</NuxtLink>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <ContentDoc />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
const path = useRoute().params.slug[0];
const {data:doc} = await useAsyncData('topics', () => {
    return queryContent('blog', path).only(['body', 'title']).findOne();
});
const {value:{body:{toc:{links:topics}}}} = doc;

// const breakpoint = ref('all');
// onMounted(() => {
//     const screens = {
//         sm: 640,
//         md: 768,
//         lg: 1024,
//         xl: 1280
//     }

//     const sm = val => val >= screens.sm && val <= screens.md
//     const md = val => val >= screens.md && val <= screens.lg
//     const lg = val => val >= screens.lg && val <= screens.xl
//     const xl = val => val >= screens.xl

//     const getBreakpoint = w => {
//         if (sm(w)) return 'sm'
//         else if (md(w)) return 'md'
//         else if (lg(w)) return 'lg'
//         else if (xl(w)) return 'xl'
//         else return 'all'
//     }

//     breakpoint.value = getBreakpoint(window.innerWidth)

//     window.addEventListener(
//         'resize', () => {
//             breakpoint.value = getBreakpoint(window.innerWidth)
//             console.log(breakpoint.value == 'all');
//         }
//     )
// })
</script>

<style lang="scss" scoped>
    .el-menu-item > a {
        @apply whitespace-normal leading-none;
    }

    :deep(pre:has(code)) {
        @apply bg-[#1f1f1f] p-4;
    }
</style>