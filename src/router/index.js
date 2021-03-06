import { createRouter, createWebHistory } from "vue-router";
import ViewLogin from "../views/ViewLogin.vue";
import ViewEnter from "../views/ViewEnter.vue";
import ViewRegister from "../views/ViewRegister.vue";
import ViewReset from "../views/ViewReset.vue";
import ViewProjects from "../views/ViewProjects.vue";
import ViewTasks from "../views/ViewTasks.vue";
import ViewPayments from "../views/ViewPayments.vue";
import ViewPeople from "../views/ViewPeople.vue";
import TaskItem from "../components/TaskItem.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "projects",
      meta: { layout: "main" },
      component: ViewProjects,
    },
    {
      path: "/tasks",
      name: "tasks",
      meta: { layout: "main" },
      component: ViewTasks,
      children: [
        {
          path: "task/:id",
          name: "task",
          component: TaskItem,
        },
      ],
    },
    {
      path: "/payments",
      name: "payments",
      meta: { layout: "main" },
      component: ViewPayments,
    },
    {
      path: "/people",
      name: "people",
      meta: { layout: "main" },
      component: ViewPeople,
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "empty" },
      component: ViewLogin,
    },
    {
      path: "/enter",
      name: "enter",
      meta: { layout: "empty" },
      component: ViewEnter,
    },
    {
      path: "/register",
      name: "register",
      meta: { layout: "empty" },
      component: ViewRegister,
    },
    {
      path: "/reset",
      name: "reset",
      meta: { layout: "empty" },
      component: ViewReset,
    },
  ],
});

export default router;
