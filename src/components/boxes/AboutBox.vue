<template>
    <div class="solid-shadow-3 bg-white text-sm text-gray-600 border border-2 ">
        <div v-if="!hideTitle" class="text-xs font-mono flex p-1 border-b border-b-2 justify-between">
            {{ title }}
            <div class="flex gap-1 items-center">
                <hr class="p-0.5 border border-2" />
                <hr class="p-0.5 border border-2 bg-black" />
            </div>
        </div>
        <div class="p-1">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

defineProps({
    title: {
        type: String,
        default: 'README.txt'
    },
    hideTitle: {
        type: Boolean,
        default: false
    }
});

</script>