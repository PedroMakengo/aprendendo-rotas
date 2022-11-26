import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Produto from "../pages/Produto.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
