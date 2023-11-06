import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Categories from "../components/Categories.vue";
import Login from "../components/Login.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/categories",
      name: "Categories",
      component: Categories,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;