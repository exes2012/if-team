import {createRouter, createWebHistory} from "vue-router";
import ViewLogin from "../views/ViewLogin.vue";
import ViewRegister from "../views/ViewRegister.vue";
import ViewProjects from "../views/ViewProjects.vue";
import ViewTasks from "../views/ViewTasks.vue";
import ViewPayments from "../views/ViewPayments.vue";
import ViewPeople from "../views/ViewPeople.vue";

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path: '/', name: 'projects', component: ViewProjects},
        {path: '/tasks', name: 'tasks', component: ViewTasks},
        {path: '/payments', name: 'payments', component: ViewPayments},
        {path: '/people', name: 'people', component: ViewPeople},
        {path: '/login', name: 'login', component: ViewLogin},
        {path: '/register', name: 'register', component: ViewRegister},
    ]
})

export default router
