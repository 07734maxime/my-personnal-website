<script setup>

defineProps({
  project: {
    name: String,
    link: String,
    required: true
  }
});

</script>

<template>
    <main class="min-w-full border p-4 flex flex-col gap-3">
        <h2 class="m-0">{{ project.name }}</h2>
        <a :href="project.link" target="_blank">{{ project.link || 'No link available' }}</a>
        <slot></slot>
    </main>
</template>