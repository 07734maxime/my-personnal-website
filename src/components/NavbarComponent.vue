<template>
  <nav class="border border-2 p-1 flex justify-center lg:justify-between m-3 bg-violet-300 font-mono text-center solid-shadow-3 gap-4 fixed inset-x-0 bottom-0 lg:top-0 lg:bottom-auto lg:w-3/7 lg:left-1/2 lg:-translate-x-1/2 z-50 ">

    <ul class="flex gap-4">
      <li v-for="link in navLinks" :key="link.name" class="relative group">
        <RouterLink :to="link.path" v-slot="{ href, navigate, isActive }">
          <a class="p-0.5"  :href="href" @click="navigate" :class="[isActive ? 'bg-orange-200' : '', !isActive ? 'active:bg-purple-400 hover:bg-purple-400' : '', '']">
            {{ link.name }}
          </a>
        </RouterLink>
      </li>
    </ul>

    <ul v-if="!navLinks.some(l => l.path === route.path)" class="absolute bg-violet-300 border border-2 p-1 sm:solid-shadow-3 w-full -top-10 left-0 lg:left-auto lg:top-auto lg:bg-transparent lg:border-none lg:w-auto lg:relative lg:p-0 lg:solid-shadow-none flex gap-4">
      <li @click="router.go(-1)" class="hover:bg-purple-400 px-1"><i class="fas fa-arrow-left"></i></li>
      <li class="bg-orange-200 px-1 cursor-pointer">{{ route.name }}</li>
    </ul>

  </nav>
</template>


<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const navLinks = router.getRoutes().filter(r => {
  const segments = r.path.split('/').filter(Boolean);
  return r.redirect === undefined && (r.path === '/' || segments.length === 1);
}).map(r => ({
  name: r.path === '/' ? 'Home' : (r.meta?.title || r.name),
  path: r.path
}));


</script>