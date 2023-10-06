import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "home",
      component: () => import("@/counter/pages/CounterValue.vue"),
    },
    {
      path: "/setup",
      name: "counter-setup",
      component: () => import("@/counter/pages/CounterSetup.vue"),
    },
  ],
});

export default router;
