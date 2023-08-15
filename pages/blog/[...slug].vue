<template>
    <div class="main lg:grid lg:grid-cols-4">
        <div v-if="topics" class="side-bar hidden lg:block">
            <h2 class="my-2 font-bold text-xl">Table of Contents</h2>
            <ul>
                <li v-for="topic in topics">
                    <NuxtLink :to="`/blog/${path}#${topic.id}`">{{ topic.text }}</NuxtLink>
                    <ul v-if="topic.children">
                        <li v-for="subTopic in topic.children">
                            <NuxtLink :to="`/blog/${path}#${subTopic.id}`">{{ subTopic.text }}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="w-full"><NuxtLink to="/blog"><Icon name="material-symbols:arrow-back" />Back</NuxtLink></div>
            <ContentDoc />
        </div>
    </div>
    <div class="fixed right-2 bottom-2 text-4xl font-bold btn">
        <button @click.prevent="scrollToTop">To Top</button>
    </div>
</template>

<script setup>
const path = useRoute().params.slug[0];
const {data:{value:{body:{toc:{links:topics}}}}} = await useAsyncData('topics', () => {
    return queryContent('blog', path).only(['body']).findOne();
});
const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<style lang="scss" scoped>
    .side-bar {
        @apply w-full h-full p-14;
    }

    :deep(ul) {
        @apply bg-zinc-900 rounded-lg py-1 divide-y-2;

        li {
            @apply px-2;
            a {
                @apply hover:underline;
            }
            ul {
                @apply list-inside list-disc mx-6 my-0;
            }
        }
    }

    .content {
        @apply w-full lg:col-span-3 max-w-4xl;

        :deep(*) {
            @apply my-1;
        }

        :deep(h1) {
            @apply font-bold text-2xl text-left;
        }

        :deep(h2) {
            @apply font-bold text-xl text-left;
        }

        :deep(h3) {
            @apply font-bold text-base text-left;
        }

        :deep(blockquote) {
            @apply bg-zinc-900 rounded-lg p-2;
        }
    }
</style>