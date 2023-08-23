<template>
    <el-collapse>
        <slot />
    </el-collapse>
</template>

<script setup>
import { ElCollapse } from 'element-plus';
</script>

<style lang="scss" scoped>
.el-collapse {
    @apply bg-[#262727] divide-y-2 divide-gray-400 divide-opacity-10 rounded-lg;
}

.el-collapse > :deep(:not(.el-collapse-item)) {
    @apply p-4 hover:bg-[#1d1d1d] cursor-pointer;
}
</style>