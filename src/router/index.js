import { createApp } from "vue";
import App from "../App.vue";
import VueGtag from "vue-gtag";

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CleanersView from "../views/CleanersView.vue";
import AboutView from "../views/AboutView.vue";
import HowWorksView from "../views/HowWorksView.vue";
import BeCleanerView from "../views/BeCleanerView.vue";
import CleanerProfile from "../views/CleanerProfile.vue";
import NotFound from "../views/404View.vue";
import ClientProfile from "../views/ClientProfile.vue";

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
    {
      path: "/cleaner/:id",
      name: "cleaner-profile",
      component: CleanerProfile,
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/client-profile",
      name: "client-profile",
      component: ClientProfile,
    },
  ],
});

export default router;

const app = createApp(HomeView);

app.use(router);

app.use(
  VueGtag,
  {
    pageTrackerTemplate(to) {
      return {
        page_title: to.name,
        page_path: to.path,
      };
    },
    config: {
      id: "G-779RNNM5NN",
    },
  },
  router
);

app.mount("#app");
