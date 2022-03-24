<template>
  <!-- Welcome User -->
  <div class="advice">
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-row align-items-center">
        <router-link to="/setupprofile">
          <img
            v-if="imageUrl"
            :src="imageUrl"
            class="pfpimage"
            alt="Profile image"
          />
          <img
            v-else
            src="@/assets/male.png"
            class="pfpimage"
            alt="Profile image"
          />
        </router-link>

        <h3 class="m-0 py-2 ms-3 text-start">Welcome, {{ Name }}</h3>
      </div>

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
        <div class="text-muted">{{ getRelativeTime(notif.time) }}</div>
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
              @click="addGlass()"
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

$circleSize: 50px;
$shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
$fontColor: rgb(250, 250, 250);

.container {
  box-shadow: none;
}

.row .container {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.pfpimage {
  object-fit: cover;
  width: $circleSize;
  height: $circleSize;
  box-shadow: $shadow;
  border-radius: calc($circleSize / 2);
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import { firebase, db } from "@/firebase";
import router from "@/router";
var moment = require("moment");

moment().format();

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
      notifs: [],
      notifCheck: null,
      imageUrl: null,
    };
  },
  components: {
    HeaderImage,
  },
  computed: {
    // Return the amount to notification to display, or display 99+ if there are more than 99 notifications
    AmountOfNotifs() {
      return this.notifs.length > 99 ? "99+" : this.notifs.length;
    },
  },
  created() {
    this.getProfile();
    this.getSchedule();
    this.getWaterIntake();
    this.getNotifs();
    setInterval(() => {
      this.tryToAddNotif();
    }, 59900);
  },
  methods: {
    // Get profile data from firebase
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
            this.notifCheck = doc.data().notifCheck;
            this.imageUrl = doc.data().imageUrl;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document of profile!");
            router.push("/setupprofile");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // Get water intake data from firebase
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
    // Add a glass and set data to firebase
    addGlass() {
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
    // Get current day of week as a string
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
      const today = new Date();
      this.currentDay = weekday[today.getDay()];
    },
    // Get schedule from firebase
    getSchedule() {
      this.getDay();
      db.collection("schedule")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            // Get data based on today's day
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
            console.log("No such document of schedule!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // Get notifications from firebase
    getNotifs() {
      db.collection("notifications")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.notifs = doc.data().notifs;
            this.tryToAddLateNotif();
            this.notifObserver();
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document of notifications!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // Set notifications to firebase
    setNotifs() {
      db.collection("notifications")
        .doc(this.email)
        .set({
          notifs: this.notifs,
        })
        .then((doc) => {
          console.log("Notification set.");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // Clear all notifications
    clearNotifs() {
      this.notifs = [];
      this.setNotifs();
    },
    // Add a notification
    addNotif(desc) {
      const count = this.notifs.length + 1;
      let notif = {
        id: count,
        desc: desc,
        time: Date.now(),
      };
      this.notifs.push(notif);
      this.setNotifs();
    },
    // Try to add a late notification
    tryToAddLateNotif() {
      const today = new Date();
      // Late reminder to drink water
      if (
        today.getHours() > 20 &&
        today.getMinutes() > 0 &&
        this.GlassesDrank < this.GlassesTotal
      ) {
        this.addNotif("Don't forget to drink water before sleeping!");
        this.notifCheck = 1;
      } else this.notifCheck = 0;
      // Set profile data to the firebase
      db.collection("profile")
        .doc(this.email)
        .set({
          name: this.Name,
          weight: this.Weight,
          height: this.Height,
          age: this.Age,
          gender: this.Gender,
          notifCheck: this.notifCheck,
          imageUrl: this.imageUrl,
        })
        .then(() => {
          console.log("NotifCheck set!");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // Try to add notification
    tryToAddNotif() {
      const today = new Date();
      // Reminder to drink water
      if (
        today.getMinutes() == 0 &&
        today.getHours() == 20 &&
        this.GlassesDrank < this.GlassesTotal
      ) {
        this.addNotif("Don't forget to drink water before sleeping!");
      }
      // Reminder to do workout
      else if (today.getMinutes() == 38 && today.getHours() == 12) {
        this.addNotif("You got today's exercises to get done!");
      }
    },
    // Get relative time as string to show how much time passed since a notification was received
    getRelativeTime(time) {
      return moment(time).fromNow();
    },
    // Observe when to clear or not an already sent late notification from tryToAddLateNotif function
    notifObserver() {
      if (this.notifCheck == 1) this.clearNotifs();
    },
  },
};
</script>
