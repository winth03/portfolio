<template>
    <el-dropdown role="navigation" class="sub-menu" @click="handleClick">
        <div class="title">
            <slot name="title" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                    <slot />
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup>
const drop = ref(false)

const handleClick = () => {
    console.log('clicked');
    drop.value = !drop.value
}
</script>

<style scoped>
.sub-menu {
    @apply hover:border-0;
}
.title {
    @apply flex items-center justify-center flex-nowrap text-xl text-white;
}

.title:has(:deep(.router-link-exact-active)) {
    @apply text-blue-500;
}

/* .dropdown {
    @apply transition-[max-height] duration-500 ease-in-out absolute w-auto h-auto overflow-hidden
        max-h-0 bg-black flex flex-col z-10 top-8 shadow-inner shadow-gray-700;
}
.dropdown > :deep(*) {
    @apply mx-4 my-2;
}

.dropdown.dropping {
    @apply max-h-[50vh];
} */
</style>