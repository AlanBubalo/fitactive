import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

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
    beforeRouteLeave(to, from, next) {
      const answer = confirm(
        "Do you really want to leave? You have unsaved changes!"
      );
      console.log(answer);
      if (answer) {
        next();
      } else {
        next(false);
      }
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
  console.log(
    "Stara ruta je ",
    from.name,
    "Nova ruta je ",
    to.name,
    "korisnik: ",
    store.currentUser
  );

  const noUser = store.currentUser === null;
  /*
  if (from.name == "SignUp") {
      next("SetupProfile");
    }
  */
  if (noUser && to.meta.needsUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
