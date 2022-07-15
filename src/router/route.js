import { createWebHistory, createRouter } from "vue-router";
import RegisterView from "@/views/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";


const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView
  },
  {
    name: "register",
    path: "/register",
    component: RegisterView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
