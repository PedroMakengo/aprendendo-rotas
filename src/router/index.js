import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Produto from "../pages/Produto/index.vue";
import MeusProdutos from "../pages/Produto/MeusProdutos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produto",
    name: "Produto",
    component: Produto,
  },
  {
    path: "/meus-produtos",
    name: "MeusProdutos",
    component: MeusProdutos,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
