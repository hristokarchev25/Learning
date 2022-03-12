import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LearningView from "../views/LearningView.vue";
import EditView from "../views/EditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/learning",
    name: "learning",
    component: LearningView,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
