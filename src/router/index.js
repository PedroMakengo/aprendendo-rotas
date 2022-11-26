import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Produto from "../pages/Produto/index.vue";
import MeusProdutos from "../pages/Produto/MeusProdutos.vue";
import Editar from "../pages/Produto/Editar.vue";
import Detalhe from "../pages/Produto/Detalhe.vue";

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
    children: [
      { path: "/", component: MeusProdutos },
      { path: "/:id", component: Detalhe, props: true },
      {
        path: "/:id/editar",
        component: Editar,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
