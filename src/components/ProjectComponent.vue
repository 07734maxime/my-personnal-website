<script setup>

defineProps({
  project: {
    name: String,
    tags: Array,
    link: String,
    required: true
  }
});

</script>

<template>
    <section class="solid-shadow-5 text-justify font-mono border border-2 bg-purple-300 transition-all duration-150 cursor-pointer hover:scale-99" >
      <div class="flex bg-purple-400 p-1 border-b border-b-2 justify-between">
        <div class="flex gap-1">
          <hr class="h-2 w-2 bg-red-500 border-none" />
          <hr class="h-2 w-2 bg-orange-400 border-none" />
          <hr class="h-2 w-2 bg-yellow-300 border-none" />
        </div>
          <hr class="h-2 w-2 border border-2" />
          </div>
          <div class="p-1">
            <h2 class="m-0 text-md">{{ project.name }}</h2>
            <ul class="flex gap-2 flex-wrap">
              <li v-for="tag in project.tags" :key="tag" :class="tag.color" class="text-sm text-white w-fit p-1 font-bold">
                {{ tag.name }}
              </li>
            </ul>
            <slot></slot>
          </div>
          <div v-if="project.link" class="my-3 flex justify-center">
            <RouterLink :to="project.link" class="bg-black transition-all duration-50 hover:bg-neutral-800 text-white p-1 font-bold">More
              Info</RouterLink :to="project.link">
          </div>
    </section>
</template>