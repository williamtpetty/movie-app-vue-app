import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Index.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MoviesNew from "../views/New.vue";
import MoviesShow from "../views/Show.vue";
import MoviesEdit from "../views/Edit.vue";
import ActorsIndex from "../views/actors/Index.vue";
import ActorsShow from "../views/actors/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/new",
    name: "movies-new",
    component: MoviesNew,
  },
  {
    path: "/show/:id",
    name: "movies-show",
    component: MoviesShow,
  },
  {
    path: "/show/:id/edit",
    name: "movies-edit",
    component: MoviesEdit,
  },
  {
    path: "/actors/index",
    name: "actors-index",
    component: ActorsIndex,
  },
  {
    path: "/actors/:id", // Set by a v-bind:to in the router link tag on Index page
    name: "actors-show",
    component: ActorsShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
