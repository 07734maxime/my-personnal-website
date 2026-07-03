<template>
  <nav class="flex items-center justify-between fixed bottom-0 left-0 w-full h-12 z-50 h">
    <a id="sidebar-trigger" class="border-t bg-neutral-200 cursor-pointer px-3 flex items-center h-full hover:bg-gray-300 border-r"
      @click="toggleSidebar">...</a>
    <div class="fixed bottom-0 top-0 left-0 w-full h-full bg-neutral-500/50 z-40" :class="{ hidden: !isSidebarToggled }"
      @click="isSidebarToggled = false"></div>
    <NavigationMenu id="sidebar" ref="sidebarRef" :class="{ hidden: !isSidebarToggled }"
      class="border-t lg:border-b h-fit fixed z-50 bottom-0 lg:top-0 left-0 w-full bg-neutral-100 p-6" />

    <a v-if="showScrollTop" @click="scrollToTop()" class="border-t bg-neutral-200 w-full flex items-center justify-center h-full cursor-pointer hover:bg-gray-300">
      ↑
    </a>

    <p class="border-t bg-neutral-200 h-full min-w-fit border-l px-4 flex items-center" :class="isSidebarToggled ? 'pointer-events-none' : ''">
      <a v-for="(part, index) in ['/home', ...route.path.split('/').filter(Boolean)]" :key="part">
        <RouterLink active="underline" class="no-underline hover:underline" active-class="font-semibold underline text-red-500"
          :to="index === 0 ? '/' : `/${route.path.split('/').filter(Boolean).slice(0, index).join('/')}`">{{ part }}/
        </RouterLink>
      </a>
    </p>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import NavigationMenu from '@/components/NavigationMenu.vue';

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
  const sidebarElement = sidebarRef.value?.$el;

  if (sidebarElement && !sidebarElement.contains(event.target) && !event.target.closest('#sidebar-trigger')) {
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

const currentScrollY = ref(0);

const showScrollTop = computed(() => currentScrollY.value > (window.innerHeight / 2));

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('keyup', handleEsc);
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('scroll', () => {
    currentScrollY.value = window.scrollY;
  });
});

</script>