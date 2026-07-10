<template>
  <main class="flex gap-8 flex-col">

      <h1 class="highlight-title -rotate-3 text-3xl">Welcome!</h1>

      <ProfileCard />

    <section class="flex flex-col gap-4">
      <h2 class="highlight-title rotate-2 text-2xl mx-auto">About Me</h2>
      <DefaultBox class="rounded-tr-lg ">
        My name is Maxime, I'm a 20-year-old apprentice programmer from France with a passion for computer science.
        I'm currently studying engineering, and I'd like to specialize myself in this domain because I'm passionate
        about it.
        I'm currently using Arch Linux as my workstation.
      </DefaultBox>

      <DefaultBox class="">
        This is not the only thing I'm passionate about : as (almost) everyone, I have other interests and hobbies
        that
        I am pursuing in my free time.
        Even though I'm rarely playing video games - and that I'm trying to stop playing competitive games - I still
        love playing games, especially
        indie games, or single player games. You can find more in another page.
      </DefaultBox>

      <DefaultBox class="rounded-bl-lg ">
        I also love watching anime, reading manga and even more novels ; even though I don't have much time for it
        lately, it stills occupy a special place in my heart. I'd like to visit Japan one day. Thus, I'm trying to learn
        Japanese.
        はじめまして！！
      </DefaultBox>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="highlight-title -rotate-1 text-2xl mx-auto">This website</h2>


      <DefaultBox class="rounded-tl-lg rounded-br-lg ">
        This website is a personal project of mine to have a
        place where I can share my interests and hobbies with the world.
      </DefaultBox>

      <DefaultBox disableHover class="rounded-tr-lg rounded-bl-lg">
        <p>Tech used</p>

        <ul class="flex justify-center">
          <li v-for="tech in techList" :key="tech.icon" class="tech-icon">
            <a :href="tech.url" target="_blank" rel="noopener noreferrer">
              <i :class="'fa-2xl ' + tech.icon"></i>
            </a>
          </li>
        </ul>

        <p class="text-sm text-gray-600">
          You can check out the source code at <a href="https://github.com/07734maxime/my-personal-website" target="_blank"
            rel="noopener noreferrer" class="highlight-link">this page!</a>
        </p>
      </DefaultBox>
    </section>



  </main>
</template>

<script setup>
import DefaultBox from '@/components/boxes/DefaultBox.vue';
import ProfileCard from '@/components/ProfileCard.vue';

const techList = [{
  icon: "fab fa-vuejs",
  url: "https://vuejs.org/"
}, {
  icon: "fab fa-js",
  url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
}, {
  icon: "fab fa-html5",
  url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
}, {
  icon: "fab fa-css3-alt",
  url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
}, {
  icon: "fab fa-tailwind-css",
  url: "https://tailwindcss.com/"
}, {
  icon: "fab fa-font-awesome",
  url: "https://fontawesome.com/"
}]

</script>