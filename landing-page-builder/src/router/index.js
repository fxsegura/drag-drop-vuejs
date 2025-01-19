import { createRouter, createWebHistory } from "vue-router";
import LandingPageDashboard from "../views/LandingPageDashboard.vue";
import LandingPageBuilder from "../views/LandingPageBuilder.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: LandingPageDashboard,
  },
  {
    path: "/builder",
    name: "Builder",
    component: LandingPageBuilder,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
