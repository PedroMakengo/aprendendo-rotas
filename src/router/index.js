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
    path: "/produto/:id",
    name: "Produto",
    component: Produto,
    props: true, // Parametros serão passados via propriedade
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
