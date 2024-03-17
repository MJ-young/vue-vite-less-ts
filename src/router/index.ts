import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/components/Layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  {
    path: "/vite",
    component: Layout,
    children: [
      {
        path: "",
        name: "Vite",
        component: () => import("@/views/vite/index.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
