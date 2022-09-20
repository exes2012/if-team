import { createRouter, createWebHistory } from "vue-router";
import ViewLogin from "../views/ViewLogin.vue";
import ViewEnter from "../views/ViewEnter.vue";
import ViewRegister from "../views/ViewRegister.vue";
import ViewReset from "../views/ViewReset.vue";
import ViewProjects from "../views/ViewProjects.vue";
import ViewTasks from "../views/ViewTasks.vue";
import ViewPayments from "../views/ViewPayments.vue";
import ViewPeople from "../views/ViewPeople.vue";
import ViewProfile from "../views/ViewProfile.vue";
import TaskItem from "../components/TaskItem.vue";
import ProfileFormData from "../components/ProfileFormData.vue";
import ProfileTeams from "../components/ProfileTeams.vue";
import ViewMain from "../views/ViewMain.vue";
import TeamsListView from "../components/TeamsListView.vue";
import TeamsCreateTeam from "../components/TeamsCreateTeam.vue";
import ViewRole from "../views/ViewRole.vue";
import ViewProject from "../views/ViewProject.vue";
import ViewAdmin from "../views/ViewAdmin.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/projects",
      name: "projects",
      meta: { layout: "team" },
      component: ViewProjects,
    },
    {
      path: "/project",
      name: "project",
      meta: { layout: "team" },
      component: ViewProject,
    },
    {
      path: "/admin",
      name: "admin",
      meta: { layout: "team" },
      component: ViewAdmin,
    },
    {
      path: "/role",
      name: "role",
      meta: { layout: "team" },
      component: ViewRole,
    },
    {
      path: "/",
      name: "main",
      meta: { layout: "main", requiresAuth: true },
      component: ViewMain,
      children: [
        {
          path: "",
          name: "TeamsListView",
          component: TeamsListView,
        },
        {
          path: "/createTeam",
          name: "TeamsCreateTeam",
          component: TeamsCreateTeam,
        },
      ],
    },
    {
      path: "/tasks",
      name: "tasks",
      meta: { layout: "team" },
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
      meta: { layout: "team" },
      component: ViewPayments,
    },
    {
      path: "/people",
      name: "people",
      meta: { layout: "team" },
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
      meta: { layout: "unauthorized" },
      component: ViewRegister,
    },
    {
      path: "/reset",
      name: "reset",
      meta: { layout: "main" },
      component: ViewReset,
    },
    {
      path: "/profile",
      name: "profile",
      meta: { layout: "main" },
      component: ViewProfile,
      children: [
        {
          path: "",
          name: "My Data",
          component: ProfileFormData,
        },
        {
          path: "teams",
          name: "teams",
          component: ProfileTeams,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
