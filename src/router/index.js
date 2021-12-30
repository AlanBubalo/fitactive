import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("@/views/Welcome.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/views/Signup.vue"),
  },
  {
    path: "/sendpassword",
    name: "SendPassword",
    component: () => import("@/views/SendPassword.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
