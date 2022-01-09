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
    path: "/setupprofile",
    name: "SetupProfile",
    component: () => import("@/views/SetupProfile.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      needsUser: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authUser =
    Object.keys(window.sessionStorage).filter((item) =>
      item.startsWith("firebase:authUser")
    )[0] != null
      ? true
      : false;
  console.log("From", from.name, "to", to.name, "logged in:", authUser);

  if (!authUser && to.meta.needsUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
