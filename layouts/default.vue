<template>
    <el-container>
        <el-header height="max-content">
            <el-page-header icon="">
                <template #title>
                    <NuxtLink class="text-4xl font-bold">My Portfolio</NuxtLink>
                </template>
                <template #content>
                    <div id="nav">
                        <NuxtLink to="/"><Icon name="ic:baseline-home"/><span>Homepage</span></NuxtLink>
                        <NuxtLink to="/tour"><Icon name="ion:bowtie"/><span>Tour</span></NuxtLink>
                        <NuxtLink to="/blog"><Icon name="mdi:document"/><span>Blog</span></NuxtLink>
                        <NuxtLink to="/archive"><Icon name="majesticons:archive"/><span>Work Archive</span></NuxtLink>
                    </div>
                </template>
            </el-page-header>
        </el-header>
        <el-main>            
            <slot />
        </el-main>
        <el-backtop :right="100" :bottom="100" />
    </el-container>
</template>

<script setup>
    import 'element-plus/theme-chalk/dark/css-vars.css'

    const scrollPosition = ref(0)

    useHead({
        htmlAttrs: {
            class: 'dark'
        }
    })

    onMounted(() => {
        window.addEventListener('scroll', () => {
            scrollPosition.value = window.scrollY
        })
    })

    onUnmounted(() => {
        window.removeEventListener('scroll')
    })
</script>

<style lang="scss" scoped>
    #nav {
        @apply space-x-2;
        .icon, span {
            @apply inline-block align-middle;
        }
        a:not(.router-link-exact-active) {
            @apply md:transition-fontsize duration-300 text-base md:hover:text-2xl;
        }
    }

    .el-header {
        @apply p-6 bg-[#0e0e0e] min-w-max;
    }

    .el-main {
        @apply overflow-x-hidden;
    }

    .el-main > :deep(*) {
        @apply min-w-full md:max-w-[80%] md:min-w-[80%] lg:max-w-[65%] lg:min-w-[65%] mx-auto;
    }
</style>