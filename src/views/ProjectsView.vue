<script setup>
import AboutBox from '@/components/boxes/AboutBox.vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
</script>

<template>
  <main class="flex flex-col gap-3">

    <h1 class="highlight-title rotate-2 text-3xl">Projects</h1>

    <AboutBox>
      Here are some of my personal projects and school projects. I will try to add more as I go along.
    </AboutBox>

    <section class="py-2 flex flex-col gap-4">

      <h2 class="highlight-title rotate-1 text-2xl">Personal Projects</h2>

      <article class="grid grid-cols-2 grid-rows-1 gap-4 ">

        <ProjectComponent t :project="{
          name: 'Initialization to Rust',
          link: '/blog/rust-impressions',
          tags: [
            { name: 'Rust', color: 'bg-rust' }
          ]
        }">
          <p class="min-h-32 text-sm mx-2">My first project in Rust! I tried to implement linear algebra operations.</p>

        </ProjectComponent>

        <ProjectComponent
          :project="{ name: 'This website', tags: [{ name: 'Vue', color: 'bg-green-500' }, { name: 'Tailwind', color: 'bg-sky-400' }] }">
          <p class="min-h-32 text-sm mx-2">This website you are currently in.</p>


        </ProjectComponent>

        <ProjectComponent
          :project="{ name: 'Yepi', tags: [{ name: 'Node.js', color: 'bg-green-500' }, { name: 'Express', color: 'bg-yellow-500' }] }">

          <p class="min-h-32 text-sm mx-2">Abandonned app to listen to music. </p>
        </ProjectComponent>

        <ProjectComponent :project="{ name: 'Unnamed', tags: [{ name: 'Electron', color: 'bg-blue-500' }] }">
          <p class="min-h-32 text-sm mx-2">Abandonned app to create a color palette.</p>

        </ProjectComponent>

      </article>
    </section>

    <h2 class="highlight-title -rotate-2 text-2xl">School Projects</h2>

    <AboutBox>
      I put these one here because they are related to my academic work, and ideas behind them were not
      by me.
    </AboutBox>

    <article class="grid grid-cols-2 grid-rows-1 gap-4">

      <ProjectComponent
        :project="{ name: 'S101', tags: [{ name: 'C++', color: 'bg-blue-600' }, { name: 'Doxygen', color: 'bg-neutral-500' }] }">

        <p class="min-h-32 text-sm mx-2">Creation of a "Pac-Man" type game in the shell.</p>
      </ProjectComponent>

      <ProjectComponent
        :project="{ name: 'R102', tags: [{ name: 'HTML', color: 'bg-red-500' }, { name: 'CSS', color: 'bg-blue-400' }] }">

        <p class="min-h-32 text-sm mx-2">A website to showcase albums and songs from a music band.</p>
      </ProjectComponent>

      <ProjectComponent :project="{ name: 'S102', tags: [{ name: 'C++', color: 'bg-blue-600' }] }">
        <p class="min-h-32 text-sm mx-2">Implementing voting systems: Borda count, two-round system, and one-round
          system.</p>
      </ProjectComponent>

    </article>
  </main>
</template>