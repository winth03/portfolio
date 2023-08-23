<template>
    <el-collapse-item>
        <template #title>
            <slot />
        </template>
        <slot name="content" />
    </el-collapse-item>
</template>

<script setup>
import { ElCollapseItem } from 'element-plus';
</script>

<style lang="scss" scoped>
:deep(.el-collapse-item__header) {
    @apply whitespace-normal inline-flex align-middle items-center justify-between w-full [&:not(.is-active)]:hover:bg-[#1d1d1d] cursor-pointer p-4;
    h2 {
        @apply max-w-max;
    }
    svg {
        @apply transition-transform duration-150 rotate-0;
    }
    .el-collapse-item__arrow.is-active svg {
        @apply rotate-90;
    }
}

:deep(ul) {
    @apply pl-8 list-disc list-inside;
}
</style>