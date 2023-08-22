<template>
    <div >
        <div v-if="topics" >
            <h2 >Table of Contents</h2>
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
        <div >
            <div><NuxtLink to="/blog">Back</NuxtLink></div>
            <ContentDoc />
        </div>
    </div>
    <div >
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

        :deep(pre:has(code)) {
            @apply bg-zinc-900 rounded-lg p-2;
        }
    }
</style>