import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// Tipos de navegação
// Modelo de Hash e History

// Hash seusite.com/#/contato
// History seusite.com/contato
