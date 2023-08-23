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
    @apply whitespace-normal inline-flex align-middle items-center justify-between w-full;
    h2 {
        @apply max-w-max;
    }
}

:deep(ul) {
    @apply pl-8 list-disc list-inside;
}
</style>