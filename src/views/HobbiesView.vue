<script setup lang="ts">
import AboutBox from '@/components/boxes/AboutBox.vue';
import HobbyBox from '@/components/boxes/HobbyBox.vue';

const animanga = [
  {
    img: "/assets/img/anime/monogatari.jpg",
    alt: "Monogatari Series"
  },
  {
    img: "/assets/img/anime/monster.jpg",
    alt: "Monster"
  },
  {
    img: "/assets/img/anime/oshi_no_ko.webp",
    alt: "Oshi no Ko"
  },
  {
    img: "/assets/img/anime/evangelion.webp",
    alt: "Evangelion"
  },
  {
    img: "/assets/img/anime/aot.jpg",
    alt: "Attack on Titan"
  },
  {
    img: "/assets/img/manga/berserk.jpg",
    alt: "Berserk"
  },
  {
    img: "/assets/img/manga/20th_century_boys.jpg",
    alt: "20th Century Boys"
  },
  {
    img: "/assets/img/manga/fma.webp",
    alt: "Fullmetal Alchemist"
  },
  {
    img: "/assets/img/manga/vagabond.jpg",
    alt: "Vagabond"
  },
  {
    img: "/assets/img/manga/jjba.jpg",
    alt: "JoJo's Bizarre Adventure"
  }
]

const albumList = [
  {
    img: "/assets/img/music/yeezus.png",
    alt: "Yeezus"
  },
  {
    img: "/assets/img/music/drukqs.jpg",
    alt: "Drukqs"
  },
  {
    img: "/assets/img/music/gusare.jpg",
    alt: "Gusare"
  },
  {
    img: "/assets/img/music/summer_flows_0_02.jpg",
    alt: "summer flows 0.02"
  },
  {
    img: "/assets/img/music/dummy.jpg",
    alt: "Dummy"
  }
]


</script>

<template>
  <main class="flex flex-col gap-12">

    <h1 class="highlight-title -rotate-2 text-3xl">My Hobbies</h1>

    <section class="flex flex-col gap-4">

      <h2 class="highlight-title rotate-1">Animanga</h2>

      <AboutBox>
        <p class="text-sm text-gray-700">
          You can find my anime list <a class="bg-orange-200 hover:underline" href="https://myanimelist.net/animelist/maxime07734"
            target="_blank" rel="noopener noreferrer">here</a> (even though it's outdated)
        </p>
      </AboutBox>

      <HobbyBox :title="'Animanga shelf'"
        :favorite="{ img: '/assets/img/anime/rezero.jpg', alt: 'Re:ZERO', note: 'Just read it, you\'ll understand why' }"
        :list="animanga" />

    </section>


    <section class="flex flex-col gap-4">

      <h2 class="highlight-title -rotate-1">Video Games</h2>

      <HobbyBox reversed :title="'Video Games Shelf'"
        :favorite="{ img: '/assets/img/games/yume_nikki.jpg', alt: 'Yume Nikki', note: 'This is definitely the best walking simulator ever made.' }"
        :list="[
          { img: '/assets/img/games/saya_no_uta.jpg', alt: 'Saya no Uta' },
          { img: '/assets/img/games/silent_hill_2.jpg', alt: 'Silent Hill 2' },
          { img: '/assets/img/games/the_house_in_fata_morgana.png', alt: 'The House in Fata Morgana' },
          { img: '/assets/img/games/ib.jpg', alt: 'Ib' }
        ]" />

    </section>

    <section class="flex flex-col gap-4">

      <h2 class="highlight-title -rotate-2">Music</h2>

      <article class="flex flex-col gap-4 solid-shadow-3 bg-purple-300 flex flex-col gap-4 p-2 border border-2">
          <p class="font-mono px-2 text-sm text-gray-700">I honestly listen to all kinds of music</p>
          
          <AboutBox hideTitle>
            <ul class="p-2 flex flex-col gap-2">
              <li v-for="album in albumList" :key="album.alt" class="hover:scale-99 duration-150 transition-all cursor-pointer flex flex-col gap-2">
                <div class="flex gap-2 items-center">
                  <img class="solid-shadow-3 w-12 rounded-sm border" :src="album.img" :alt="album.alt" />
                  <span class="font-mono">{{ album.alt }}</span>
                </div>
                <hr />
              </li>
            </ul>
          </AboutBox>

      </article>
    </section>
  </main>
</template>


