import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/authentication/Login";
import Registration from "@/views/authentication/Registration";
import TaskList from "@/views/tasks/TaskList";
import TaskCreate from "@/views/tasks/TaskCreate";
import TaskEdit from "@/views/tasks/TaskEdit";
import * as auth from "@/services/AuthService";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Registration",
    component: Registration
  },
  {
    path: "/tasks",
    name: "TaskList",
    component: TaskList,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/tasks/new",
    name: "TaskCreate",
    component: TaskCreate,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/tasks/:id",
    name: "TaskEdit",
    component: TaskEdit,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history"
});

export default router;
