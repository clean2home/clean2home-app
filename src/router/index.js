import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CleanersView from "../views/CleanersView.vue";
import AboutView from "../views/AboutView.vue";
import HowWorksView from "../views/HowWorksView.vue";
import BeCleanerView from "../views/BeCleanerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cleaners",
      name: "cleaners",
      component: CleanersView,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutView,
    },
    {
      path: "/como-funciona",
      name: "how-works",
      component: HowWorksView,
    },
    {
      path: "/hazte-cleaner",
      name: "be-cleaner",
      component: BeCleanerView,
    },
  ],
});

export default router;
