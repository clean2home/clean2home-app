import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import FontAwesomeIcon from "./assets/icons/fontawesome-icons.js";
import { useAuthStore } from "@/stores/auth";

(async () => {
  const app = createApp(App);

  app.use(createPinia());
  const { getUser } = useAuthStore();
  await getUser();

  app.use(router);
  app.component("font-awesome-icon", FontAwesomeIcon);
  app.mount("#app");
})();
