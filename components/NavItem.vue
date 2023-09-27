<template>
    <NuxtLink class="item" :to="to" :target="blank ? '_blank' : ''">
        <Icon v-if="icon" :name="icon" />
        <slot />
    </NuxtLink>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        default: ''
    },
    blank: {
        type: Boolean,
        default: false
    },
    to: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.item {
    @apply hover:no-underline align-middle text-white text-xl text-center flex justify-center items-center;
}

.router-link-exact-active, .router-link-active {
    @apply text-blue-500;
}
</style>