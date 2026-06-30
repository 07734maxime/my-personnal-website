import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: () => import('../views/HobbiesView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: "/blog/rust-impressions",
      name: "rust-impressions",
      component: () => import("../views/blog/RustImpressionsView.vue"),
    },
    {
      path: "/blog/learning-japanese",
      name: "learning-japanese",
      component: () => import("../views/blog/LearningJapaneseView.vue"),
    },
  ],
})

export default router
