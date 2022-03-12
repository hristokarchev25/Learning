import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LearningView from "../views/LearningView.vue";
import EditView from "../views/EditView.vue";
import AddCourseView from "../views/AddCourseView.vue";

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
  {
    path: "/addCourse",
    name: "addCourse",
    component: AddCourseView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
