import { createRouter, createWebHistory } from "vue-router";
console.log("index");
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
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("@/views/Calendar.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/workout",
    name: "Workout",
    component: () => import("@/views/Workout.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/cardio",
    name: "Cardio",
    component: () => import("@/views/Cardio.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/water-intake",
    name: "WaterIntake",
    component: () => import("@/views/WaterIntake.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/sleep",
    name: "Sleep",
    component: () => import("@/views/Sleep.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/views/ContactUs.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/timer",
    name: "Timer",
    component: () => import("@/views/Timer.vue"),
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
  } else if (authUser && !to.meta.needsUser) {
    next("/home");
  } else {
    next();
  }
});

export default router;
