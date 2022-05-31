import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CleanersView from "../views/CleanersView.vue";
import AboutView from "../views/AboutView.vue";
import HowWorksView from "../views/HowWorksView.vue";
import BeCleanerView from "../views/BeCleanerView.vue";
import CleanerProfile from "../views/CleanerProfile.vue";
import CheckoutSuccessView from "../views/CheckoutSuccessView.vue";
import CheckoutCancelView from "../views/CheckoutCancelView.vue";
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
      path: "/checkout/success",
      name: "checkout-success",
      component: CheckoutSuccessView,
    },
    {
      path: "/checkout/cancel",
      name: "checkout-cancel",
      component: CheckoutCancelView,
    },
    {
      path: "/client-profile",
      name: "client-profile",
      component: ClientProfile,
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "NotFound" },
    }
  ],
});

export default router;
