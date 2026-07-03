<template>
    <main>
        <h1>{{ route.name }}</h1>
        <p>Nothing to see here. Navigate to a different page through the menu.</p>
    </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>