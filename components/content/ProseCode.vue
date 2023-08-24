<template>
    <div class="code-wrapper">
        <div class="header">
            {{ filename || '' }} {{ language || '' }}
        </div>
        <slot />
    </div>
</template>

<script setup>
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
})
</script>

<style lang="scss" scoped>
    .code-wrapper {
        @apply bg-[#1f1f1f] rounded-t-lg;
        .header {
            @apply text-[#c5c8c6] text-sm font-mono p-2 w-full;
        }
        :deep(pre) {
            @apply p-4 overflow-x-auto;
        }
        :deep(pre)::-webkit-scrollbar {
            @apply w-4 bg-white;
        }

        :deep(pre)::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        }

        :deep(pre)::-webkit-scrollbar-thumb {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        }
    }
</style>