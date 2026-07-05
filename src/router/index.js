import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/hobbies',
      name: 'Hobbies',
      component: () => import('../views/HobbiesView.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: "/blog/rust-impressions",
      name: "First impressions about Rust",
      component: () => import("../views/blog/RustImpressionsView.vue"),
    },
    {
      path: "/blog/learning-japanese",
      name: "My experience learning Japanese",
      component: () => import("../views/blog/LearningJapaneseView.vue"),
    },
    {
      name: "Not Found",
      path: "/:catchAll(.*)",
      redirect: "/",
    },
    {
      name: "Japanese Alphabet",
      path: "/stuff/japanese-alphabet",
      component: () => import("../views/stuff/JapaneseAlphabetView.vue"),
    },
    {
      name: "Stuff",
      path: "/stuff",
      component: () => import("../views/StuffView.vue"),
    }
  ],
})

export default router
