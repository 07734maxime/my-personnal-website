<template>
    <main>
        <h1>{{ route.name }}</h1>
        <p>
            Creating a website is a major problem for me. I have a lot of ideas, I want to experiment a lot of new things but I always don't know how to implement them,
            or the final render is not what I expected. This is why, this time, I've decided to almost not use CSS. This is really sad, and I'll try to maintain this website
            and update the CSS regulary, or completely change the design.
        </p>
        <p>The main idea I was is to make a horizontal website, but using it on phone would've been pure chaos. I wanted to make too a "messy" design, like
            <a href="https://yvettesbridalformal.p1r8.net/" target="_blank" rel="noopener noreferrer">this website</a>, but I don't think this was a good idea to show myself.
            So, i might create another website with this kind of design. I might just orient this website design to be more conventional, and maybe use a brutalist design.
        </p>
        <p>By the way, this page was supposed to be empty, I just added content there because I didn't know where to put it. Feel free to navigate to 
            <RouterLink to="/stuff/japanese-alphabet">this page</RouterLink> (the reason why this page exists).
        </p>
    </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>