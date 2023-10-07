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
    {
      path: "/clients",
      name: "clients",
      redirect: { name: "clients-list" },
      component: () => import("@/clients/layouts/ClientsLayout.vue"),
      children: [
        {
          path: "/list",
          name: "clients-list",
          component: () => import("@/clients/pages/ClientsList.vue"),
        },
        {
          path: "/clients/:id",
          name: "single-client",
          component: () => import("@/clients/pages/SingleClient.vue"),
        },
      ],
    },
  ],
});

export default router;
