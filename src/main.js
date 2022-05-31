import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGtag from "vue-gtag";

import App from "./App.vue";
import router from "./router";
import FontAwesomeIcon from "./assets/icons/fontawesome-icons.js";
import { useAuthStore } from "@/stores/auth";

(async () => {
  const app = createApp(App);

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
  app.use(createPinia());
  const { getUser } = useAuthStore();
  await getUser();

  app.use(router);
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.mount("#app");
})();
