<template>
    <nav>
        <slot />
    </nav>
</template>

<script setup>

</script>

<style scoped>
nav {
    @apply w-full flex gap-4 px-4 py-2;
}
nav :deep(*) {
    @apply [&:not(.router-link-exact-active)]:hover:text-gray-400;
}
</style>