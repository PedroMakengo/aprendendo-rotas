import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Produto from "./pages/Produto";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Home },
    { path: "/produto", component: Produto },
  ],
});
