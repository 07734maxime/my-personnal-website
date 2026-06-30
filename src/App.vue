<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const isSidebarToggled = ref(false);
const sidebarRef = ref(null); // Nécessaire pour détecter le clic extérieur
const route = useRoute();

const toggleSidebar = () => {
  isSidebarToggled.value = !isSidebarToggled.value;
};

watch(route, () => {
  isSidebarToggled.value = false; // Ferme la sidebar lors du changement de route
});

const handleEsc = (event) => {
  if (event.key === 'Escape') {
    isSidebarToggled.value = false;
  }
};

const handleClickOutside = (event) => {
  // On vérifie si on a cliqué en dehors de la sidebar
  if (sidebarRef.value && !sidebarRef.value.contains(event.target) && !event.target.closest('#sidebar-trigger')) {
    isSidebarToggled.value = false;
  }
};

watch(isSidebarToggled, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

onMounted(() => {
  window.addEventListener('keyup', handleEsc);
  window.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
  isSidebarToggled.value = false; // Reset the sidebar state when the component is unmounted
  document.body.style.overflow = '';
  window.removeEventListener('keyup', handleEsc);
  window.removeEventListener('click', handleClickOutside);
})
</script>

<template>
  <a id="sidebar-trigger" class="top-0 fixed left-0 p-2 hover:border-b hover:border-r cursor-pointer hover:bg-gray-300" @click="toggleSidebar">...</a>
  <div class="fixed  top-0 left-0 w-full h-full bg-neutral-500/50 z-40" :class="{ hidden: !isSidebarToggled }" @click="isSidebarToggled = false"></div>
  <section id="sidebar" ref="sidebarRef" :class="{ hidden: !isSidebarToggled }" class="border-b fixed z-50 top-0 left-0 w-full bg-neutral-100 p-6 border-r">
    <h2>Main Menu</h2>
    <p class="m-0 hidden lg:block">Press ESC to close</p>
    <p class="m-0 ">Click outside to close</p>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/projects">Projects</RouterLink></li>
      
        <li><RouterLink to="/hobbies">Hobbies</RouterLink></li>
      
      
        <li>
          <RouterLink to="/blog">Blog</RouterLink>
          <ul>
            <RouterLink to="/blog/rust-impressions">
              <li>My first impressions about Rust</li>
            </RouterLink>
            <RouterLink to="/blog/learning-japanese">
              <li>Learning japanese</li>
            </RouterLink>
            <RouterLink to="/blog/yume-nikki">
              <li>yumenikki.txt</li>
            </RouterLink>
          </ul>
        </li>
    </ul>
  </section>

  <RouterView :class="isSidebarToggled ? 'pointer-events-none' : ''" class="mt-16 m-6 lg:m-16 lg:w-1/3 lg:mx-auto" />
  
  <p :class="isSidebarToggled ? 'pointer-events-none' : ''" class="fixed max-w-5/6 top-0 right-0 p-2 bg-neutral-200 m-0 border-l border-b ">
    <a v-for="(part, index) in ['/home', ...route.path.split('/').filter(Boolean)]" :key="part" >
      <RouterLink class="no-underline hover:underline" active-class="font-semibold text-red-500" :to="index === 0 ? '/' : `/${route.path.split('/').filter(Boolean).slice(0, index).join('/')}`">{{ part }}/</RouterLink>
    </a>
  </p>
</template>