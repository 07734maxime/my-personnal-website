<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routeList = ref([]);



onMounted(() => {
  const routes = router.getRoutes().filter(r => r.redirect === undefined && r.name !== undefined); // Filtrer les routes qui ne sont pas des redirections et qui ont un nom
  
  // On filtre pour ne garder que les routes "racines" (qui n'ont pas de slashs intermédiaires)
  // ou on reconstruit tout si tu veux une hiérarchie complète
  const rootRoutes = routes.filter(r => r.path.split('/').length <= 2);
  
  const menu = rootRoutes.map(route => {
    // Créer une copie pour ne pas muter l'objet original du router
    const parent = { ...route, children: [] };
    
    // Trouver les enfants dans la liste complète
    parent.children = routes.filter(r => 
      r.path.startsWith(`${parent.path}/`) && r.path !== parent.path
    );
    
    return parent;
  });

  routeList.value = menu;
});



</script>


<template>
    <section>
      <h2>Main Menu</h2>  
      <p class="m-0 hidden lg:block">Press ESC to close</p>
      <p class="m-0 ">Click outside to close</p>
    <ul>
      <li v-for="route in routeList.filter(r => !r.isSubroute)" :key="route.path">
        <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        <ul>
          <li v-for="subroute in route.children" :key="subroute.path">
            <RouterLink :to="subroute.path">{{ subroute.name }}</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>