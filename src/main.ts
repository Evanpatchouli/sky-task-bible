import { createApp } from "vue";
import App from "./App.vue";
import Varlet from "@varlet/ui";
import { StyleProvider, Themes } from "@varlet/ui";
import router from "./router";
import pinia from "./store";
import "@varlet/ui/es/style";
import "./style.css";

StyleProvider(Themes.dark);
createApp(App)
  .use(Varlet)
  .use(router)
  .use(pinia)
  // .use(locales)
  .mount("#app");
