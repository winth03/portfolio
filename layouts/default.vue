<template>
    <el-container>
        <el-header height="max-content">
            <el-page-header icon="">
                <template #title>
                    <NuxtLink class="text-4xl font-bold !text-white !no-underline" to="/">My Portfolio</NuxtLink>
                </template>
                <template #content v-if="breakpoint == 'lg' || breakpoint == 'xl'">
                    <el-menu mode="horizontal" :ellipsis="false" :router="true" default-active="home">
                        <el-menu-item index="home" route="/">
                            <Icon name="ic:baseline-home"/>Homepage
                        </el-menu-item>
                        <el-menu-item index="tour" route="tour">
                            <Icon name="ion:bowtie"/>Tour
                        </el-menu-item>
                        <el-sub-menu index="blog">
                            <template #title><Icon name="mdi:document"/>Blog</template>
                            <el-menu-item index="blog1" route="/blog/blog1">Blog1</el-menu-item>
                            <el-menu-item index="blog2" route="/blog/blog2">Blog2</el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="archive">
                            <template #title><Icon name="majesticons:archive"/>Work Archive</template>
                            <el-menu-item @click="() => redirect('https://onlinegdb.com/gq69vrl5t')">XxX-Mega Dungeon 2019-XxX</el-menu-item>
                            <el-menu-item @click="() => redirect('https://winth03.github.io/learningwithweaboos/')">Learning with Weaboos</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </template>
                <template #extra v-else>
                    <el-button type="primary" @click="drawer = true">
                        <Icon name="ion:menu-outline"/>
                    </el-button>
                    <el-drawer v-model="drawer" size="75%">
                        <template #header>
                            <div class="flex flex-col">
                                <h1>My Portfolio</h1>
                                <h3>menu</h3>
                            </div>
                        </template>
                        <el-menu mode="vertical" :router="true" default-active="home">
                            <el-menu-item index="home" route="/">
                                <Icon name="ic:baseline-home"/>Homepage
                            </el-menu-item>
                            <el-menu-item index="tour" route="tour">
                                <Icon name="ion:bowtie"/>Tour
                            </el-menu-item>
                            <el-sub-menu index="blog">
                                <template #title><Icon name="mdi:document"/>Blog</template>
                                <el-menu-item index="blog1" route="/blog/blog1">Blog1</el-menu-item>
                                <el-menu-item index="blog2" route="/blog/blog2">Blog2</el-menu-item>
                            </el-sub-menu>
                            <el-sub-menu index="archive">
                                <template #title><Icon name="majesticons:archive"/>Work Archive</template>
                                <el-menu-item @click="() => redirect('https://onlinegdb.com/gq69vrl5t')">XxX-Mega Dungeon 2019-XxX</el-menu-item>
                                <el-menu-item @click="() => redirect('https://winth03.github.io/learningwithweaboos/')">Learning with Weaboos</el-menu-item>
                            </el-sub-menu>
                        </el-menu>
                    </el-drawer>
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
    useHead({
        htmlAttrs: {
            class: 'dark'
        }
    })
    const drawer = ref(false)

    const redirect = (url) => {
        navigateTo(url, {
            external: true
        })
    }

    const breakpoint = ref('all');
    onMounted(() => {
        const screens = {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280
        }

        const sm = val => val >= screens.sm && val <= screens.md
        const md = val => val >= screens.md && val <= screens.lg
        const lg = val => val >= screens.lg && val <= screens.xl
        const xl = val => val >= screens.xl

        const getBreakpoint = w => {
            if (sm(w)) return 'sm'
            else if (md(w)) return 'md'
            else if (lg(w)) return 'lg'
            else if (xl(w)) return 'xl'
            else return 'all'
        }

        breakpoint.value = getBreakpoint(window.innerWidth)

        window.addEventListener(
            'resize', () => {
                breakpoint.value = getBreakpoint(window.innerWidth)
                console.log(breakpoint.value == 'all');
            }
        )
    })
</script>

<style lang="scss" scoped>
    .el-menu {
        .icon, span {
            @apply inline-block align-middle;
        }
        a {
            @apply md:transition-fontsize md:duration-300 text-base [&:not(.router-link-exact-active)]:md:hover:text-2xl;
        }
    }

    .el-header {
        @apply p-6 bg-[#0e0e0e] min-w-max;
    }

    .el-main {
        @apply overflow-x-hidden;
    }

    .el-main > :deep(*) {
        @apply min-w-full lg:max-w-[80%] lg:min-w-[80%] xl:max-w-[65%] xl:min-w-[65%] mx-auto;
    }
</style>