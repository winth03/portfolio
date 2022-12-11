<template>
    <div class="w-screen h-screen px-8">        
        <iframe src="/learningwithweaboos/index.html" :class="fullscreen ? 'fullscreen' : ''"></iframe>
        <div class="floater">
            <button class="btn bg-slate-600" @click="fullscreen = !fullscreen">Toggle Fullscreen</button>
        </div>
    </div>
</template>

<script setup>
    const fullscreen = ref(false);
</script>

<style scoped>
    .fullscreen {
        @apply fixed top-0 left-0 bottom-0 right-0 border-0 m-0 p-0 overflow-hidden;
    }

    .floater {
        @apply absolute top-0 right-0 m-8;
    }

    iframe {
        @apply w-full h-full;
    }
</style>