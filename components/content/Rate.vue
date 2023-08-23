<template>
    <el-rate :model-value="score" disabled show-score />
</template>

<script setup>
import { ElRate } from 'element-plus'
const { score } = defineProps({
    score: {
        type: Number,
        default: 0
    }
})
</script>

<style lang="scss" scoped>

</style>