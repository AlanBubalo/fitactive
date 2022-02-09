<template>
  <div class="advice text-center text-white d-flex justify-content-between">
    <p class="m-auto">Welcome, {{ Name }}</p>
    <div class="pe-5">
      <button
        class="btn bg-white btn-sm box-shadow p-0"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i class="fas fa-bell p-3"></i
        ><span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary p-2"
        >
          99+
          <span class="visually-hidden">unread messages</span></span
        >
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
    <div class="m-3">
      You still haven't completed your Water Intake Challenge!
    </div>
    <div class="m-3">It's late. You should go to sleep!</div>
    <div class="m-3">Today is Legs day!</div>
    <div class="offcanvas-body">Don't forget to do cardio!</div>
  </div>

  <div class="container">
    <div class="row g-3 my-3">
      <!-- Cardio -->
      <div class="col-12 col-md-4 mt-0">
        <div class="p-4 bg-white my-rounded h-100 me-0">
          <div class="d-flex justify-content-between">
            <div>
              <h4>Cardio:</h4>
              <p><span class="fs-2">3000</span> /6000 meters</p>
            </div>
            <router-link to="/cardio" class="ms-auto my-auto">
              <button class="btn bg-primary box-shadow">
                Start
              </button></router-link
            >
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 50%"
              aria-valuenow="3000"
              aria-valuemin="0"
              aria-valuemax="6000"
            ></div>
          </div>
        </div>
      </div>
      <!-- Water Intake -->
      <div class="col-12 col-md-4 mt-md-0 mt-3">
        <div
          class="p-4 my-rounded h-100 m-0"
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
              class="btn bg-primary box-shadow ms-auto my-auto"
              :class="GlassesDrank >= GlassesTotal ? 'disabled' : ''"
              @click="AddGlass()"
            >
              Add
            </button>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              :style="{
                width: (this.GlassesDrank / this.GlassesTotal) * 100 + '%',
              }"
              aria-valuenow="{{glassesDrank}}"
              aria-valuemin="0"
              aria-valuemax="{{glassesTotal}}"
            ></div>
          </div>
        </div>
      </div>
      <!-- Ideal Hours of Sleep -->
      <div class="col-12 col-md-4 mt-md-0 mt-3">
        <div
          class="p-4 bg-white my-rounded d-flex justify-content-between h-100 ms-0"
        >
          <div>
            <h4>Ideal hours for sleep:</h4>
            <p>8 hours 30 minutes</p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
              <router-link to="/cardio" class="ms-auto my-auto">
                <button class="btn bg-primary box-shadow">
                  Check your sleeping schedule!
                </button></router-link
              >
            </div>
          </div>
          <img class="img" alt="Clock" src="@/assets/clock.png" />
        </div>
      </div>
    </div>

    <!-- Profile -->
    <div class="row my-3">
      <div class="col-12 col-md-5 mt-md-0">
        <div class="p-4 bg-white my-rounded">
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
      <!-- Activity -->
      <div class="col-12 col-md-7 mt-md-0 mt-3">
        <div class="p-4 bg-white my-rounded">
          <div class="d-flex justify-content-between">
            <h4>Activity Progress:</h4>
            <p>40 minutes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";

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

.advice {
  background: $gradient-primary-secondary;
  border-radius: 0 0 2rem 2rem;

  * {
    padding: 1rem;
  }
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
    };
  },
  components: {
    HeaderImage,
  },
  mounted() {
    this.getProfile();
    this.getWaterIntake();
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
