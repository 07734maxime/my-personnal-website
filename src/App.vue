<script setup>

import { watch } from 'vue';
import { useRoute } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    document.title = String(route.meta?.title || route.name || 'App');
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <RouterView class="py-24 px-6 lg:mx-16 lg:w-1/4 lg:mx-auto relative z-20" />
    <NavbarComponent class="fixed bottom-0 left-0 right-0 z-50" />
  </div>

  <span class="select-none flex fixed top-5 left-5 z-50 bg-white/50 backdrop-blur-sm font-mono">
    <a v-for="part in ['/home', ...route.path.split('/').filter(Boolean)]" :key="part">{{ part }}/</a>
  </span>

</template>
