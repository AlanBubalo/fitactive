import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).config.devtools = true;
createApp(App).use(router).mount("#app");
