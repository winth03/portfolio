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
            <el-aside v-if="topics" class="hidden md:block">
                <h4>Table of Contents</h4>
                <el-menu :router="true">
                    <template v-for="topic in topics">
                        <el-sub-menu :index="topic.id" v-if="topic.children">
                            <template #title>
                                {{ topic.text }}
                            </template>
                            <el-menu-item :index="`/blog/${path}/#${subTopic.id}`" v-for="subTopic in topic.children">
                                {{ subTopic.text }}
                            </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item :index="`/blog/${path}/#${topic.id}`" v-else>
                            {{ topic.text }}
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
</script>

<style lang="scss" scoped>
    .el-menu-item {
        @apply whitespace-normal leading-none;
    }

    .el-menu {
        @apply bg-[#262727] divide-y-2 divide-gray-400 divide-opacity-10 rounded-lg w-full;
    }

    .el-main>:deep(div) {
        @apply space-y-4 overflow-hidden;
        object {
            @apply aspect-square;
        }
    }

    :deep(.el-rate__icon.is-active path), :deep(.el-rate__icon.el-rate__decimal path) {
        @apply fill-[#edff86];
    }
</style>