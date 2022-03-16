<template>
  <!-- Welcome User -->
  <div class="advice">
    <div class="d-flex justify-content-between">
      <h3 class="m-0 py-2">Welcome, {{ Name }}</h3>
      <button
        class="btn bg-transparent btn-sm p-0 position-relative"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i class="fas fa-bell fa-2x text-white"></i>
        <span
          v-if="!(Array.isArray(notifs) && !notifs.length)"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black p-2"
        >
          {{ AmountOfNotifs }}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  </div>

  <!-- Notification -->
  <div
    class="offcanvas offcanvas-end"
    :class="showMenu ? 'show' : ''"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h4 id="offcanvasRightLabel">Notifications</h4>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div
      v-if="Array.isArray(notifs) && !notifs.length"
      class="offcanvas-body text-muted p-5 text-center"
    >
      No notifications left.
    </div>
    <ul v-else class="offcanvas-body overflow-auto m-0 p-0">
      <li class="list-group-item" v-for="notif in notifs" :key="notif">
        <p>{{ notif.desc }}</p>
        <div class="text-muted">{{ notif.time }}</div>
      </li>
    </ul>

    <div class="offcanvas-footer px-3 py-0">
      <button class="btn my-btn bg-primary box-shadow" @click="clearNotifs()">
        Clear All Notifications
      </button>
    </div>
  </div>

  <div class="container">
    <div class="row g-3 my-3">
      <!-- Schedule -->
      <div class="col-12 col-md-6 mt-md-0 mt-3">
        <div class="container p-4 bg-white my-rounded h-100 ms-0">
          <div class="d-flex justify-content-between">
            <div>
              <h4>Schedule:</h4>
            </div>
            <router-link to="/schedule">
              <button class="btn bg-primary box-shadow">
                Check Schedule
              </button></router-link
            >
          </div>
          <ul class="list-group mt-4">
            <li class="list-group-item bg-primary">{{ currentDay }}</li>
            <div v-if="Array.isArray(today) && !today.length">
              <li class="list-group-item">No exercises today</li>
            </div>
            <div v-else>
              <li
                class="list-group-item"
                v-for="exercise in today"
                :key="exercise"
              >
                {{ exercise.name }}
              </li>
            </div>
          </ul>
        </div>
      </div>

      <!-- Water Intake -->
      <div class="col-12 col-md-6 mt-md-0 mt-3">
        <div
          class="container p-4 my-rounded h-100 m-0"
          :class="GlassesDrank >= GlassesTotal ? 'bg-primary' : 'bg-white'"
        >
          <div class="d-flex justify-content-between">
            <div>
              <h4>Water Intake:</h4>
              <p>
                <span class="fs-2">{{ GlassesDrank }}</span> /{{ GlassesTotal }}
                glasses
              </p>
            </div>
            <button
              class="btn bg-primary box-shadow ms-auto mt-0 my-auto"
              :class="GlassesDrank >= GlassesTotal ? 'disabled' : ''"
              @click="AddGlass()"
            >
              <div v-if="GlassesDrank < GlassesTotal">Add</div>
              <div v-else>Done</div>
            </button>
          </div>
          <div
            class="progress"
            :class="GlassesDrank >= GlassesTotal ? 'hide' : ''"
          >
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              :style="{
                width: (GlassesDrank / GlassesTotal) * 100 + '%',
              }"
              :aria-valuenow="GlassesDrank"
              aria-valuemin="0"
              :aria-valuemax="GlassesTotal"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile -->
    <div class="row my-3 justify-content-center">
      <div class="col-12 col-md-5 mt-md-0">
        <div class="container p-4 bg-white my-rounded">
          <div class="d-flex justify-content-between">
            <h4>Profile:</h4>
            <router-link to="/setupprofile">
              <button class="btn bg-primary box-shadow">
                Setup Profile
              </button></router-link
            >
          </div>
          <div class="row mt-4">
            <div class="col-3 col-md-6 text-center">
              <h6>Weight:</h6>
              <p>{{ Weight }} kg</p>
            </div>
            <div class="col-3 col-md-6 text-center">
              <h6>Height:</h6>
              <p>{{ Height }} cm</p>
            </div>
            <div class="col-3 col-md-6 text-center">
              <h6>Age:</h6>
              <p>{{ Age }}</p>
            </div>
            <div class="col-3 col-md-6 text-center">
              <h6>Gender:</h6>
              <p>{{ Gender }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

.container {
  box-shadow: none;
}

.row .container {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.img {
  width: auto;
  height: 35px;
  object-fit: cover;
  margin: right;
}

.gif {
  width: auto;
  height: 35px;
  object-fit: cover;
  margin: right;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 0.4rem 0.2rem $primary;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase, db } from "@/firebase";
import router from "@/router";

export default {
  name: "Home",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
      Name: null,
      Weight: null,
      Height: null,
      Age: null,
      Gender: null,
      GlassesDrank: null,
      GlassesTotal: null,
      showMenu: false,
      today: [],
      currentDay: "",
      notifs: [
        {
          id: 1,
          desc: "You got today's exercises to get done!",
          time: "Yesterday",
        },
        { id: 2, desc: "Don't forget to drink water!", time: "2 days ago" },
        {
          id: 3,
          desc: "You got today's exercises to get done!",
          time: "3 days ago",
        },
      ],
    };
  },
  components: {
    HeaderImage,
  },
  computed: {
    AmountOfNotifs() {
      return this.notifs.length > 99 ? "99+" : this.notifs.length;
    },
  },
  mounted() {
    this.getSchedule();
    this.getWaterIntake();
    this.getProfile();
    //this.getNotifications();
  },
  methods: {
    getProfile() {
      db.collection("profile")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.Name = doc.data().name;
            this.Weight = doc.data().weight;
            this.Height = doc.data().height;
            this.Age = doc.data().age;
            this.Gender = doc.data().gender;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document of profile!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getWaterIntake() {
      db.collection("waterIntake")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.GlassesDrank = doc.data().glassesDrank;
            this.GlassesTotal = doc.data().glassesTotal;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document of water intake!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getDay() {
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const d = new Date();
      this.currentDay = weekday[d.getDay()];
    },
    getSchedule() {
      this.getDay();
      db.collection("schedule")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            switch (this.currentDay) {
              case "Sunday":
                this.today = doc.data().sun;
                break;
              case "Monday":
                this.today = doc.data().mon;
                break;
              case "Tuesday":
                this.today = doc.data().tue;
                break;
              case "Wednesday":
                this.today = doc.data().wen;
                break;
              case "Thursday":
                this.today = doc.data().thu;
                break;
              case "Friday":
                this.today = doc.data().fri;
                break;
              default:
                this.today = doc.data().sat;
                break;
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getNotifications() {
      db.collection("notifications")
        .doc(this.email)
        .set({
          glassesDrank: this.GlassesDrank + 1,
          glassesTotal: this.GlassesTotal,
        })
        .then((doc) => {
          console.log("Added a glass of water.");
          this.getWaterIntake();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    clearNotifs() {
      this.notifs = [];
    },
    showOffcanvasMenu() {
      this.showMenu = !this.showMenu;
    },
    AddGlass() {
      db.collection("waterIntake")
        .doc(this.email)
        .set({
          glassesDrank: this.GlassesDrank + 1,
          glassesTotal: this.GlassesTotal,
        })
        .then((doc) => {
          console.log("Added a glass of water.");
          this.getWaterIntake();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
