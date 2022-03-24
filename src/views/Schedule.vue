<template>
  <div class="advice">
    <p>
      The key is not to prioritize what's on your schedule, but to schedule your
      priorities.
    </p>
  </div>
  <!-- Workouts to choose from -->
  <div class="container text-center p-3 bg-white my-rounded mt-4">
    <div class="row g-3">
      <div class="col-4">
        <to-do-list title="Beginner">
          <draggable
            class="list-group mt-3 min-h"
            :list="beginner"
            :group="{ name: 'tasks', pull: 'clone', put: false }"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="list-group-item">{{ element.name }}</div>
            </template>
          </draggable>
        </to-do-list>
      </div>
      <div class="col-4">
        <to-do-list title="Intermediate">
          <draggable
            class="list-group mt-3 min-h"
            :list="intermediate"
            :group="{ name: 'tasks', pull: 'clone', put: false }"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="list-group-item">{{ element.name }}</div>
            </template>
          </draggable>
        </to-do-list>
      </div>
      <div class="col-4">
        <to-do-list title="Advanced">
          <draggable
            class="list-group mt-3 min-h"
            :list="advanced"
            :group="{ name: 'tasks', pull: 'clone', put: false }"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="list-group-item">{{ element.name }}</div>
            </template>
          </draggable>
        </to-do-list>
      </div>
    </div>

    <!-- Reset and Save buttons -->
    <div class="row">
      <div class="col mx-md-5">
        <button
          type="button"
          @click="reset()"
          class="btn my-btn border box-shadow p-2"
        >
          Reset
        </button>
      </div>
      <div class="col mx-md-5">
        <button
          type="submit"
          class="btn my-btn bg-primary box-shadow p-2"
          @click="save()"
        >
          Save
        </button>
      </div>
    </div>
  </div>

  <!-- Schedule -->
  <div class="container-fluid mt-3">
    <div class="row g-2">
      <div class="col-lg col-6 mb-lg-3 mb-0">
        <div id="Monday" class="container p-3 bg-white my-rounded">
          <to-do-list title="Monday">
            <draggable
              class="list-group mt-3 min-h"
              :list="mon"
              group="tasks"
              item-key="id"
            >
              <template #item="{ element, index }">
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text">{{ element.name }} </span>
                  <i
                    class="fa fa-times close align-self-center"
                    @click="removeAt(index, mon)"
                  ></i>
                </div>
              </template>
            </draggable>
          </to-do-list>
        </div>
      </div>
      <div class="col-lg col-6 mb-lg-3 mb-0">
        <div id="Tuesday" class="container p-3 bg-white my-rounded">
          <to-do-list title="Tuesday">
            <draggable
              class="list-group mt-3 min-h"
              :list="tue"
              group="tasks"
              item-key="id"
            >
              <template #item="{ element, index }">
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text">{{ element.name }} </span>
                  <i
                    class="fa fa-times close align-self-center"
                    @click="removeAt(index, tue)"
                  ></i>
                </div>
              </template>
            </draggable>
          </to-do-list>
        </div>
      </div>
      <div class="col-lg col-6 mb-lg-3 mb-0">
        <div id="Wednesday" class="container p-3 bg-white my-rounded">
          <to-do-list title="Wednesday">
            <draggable
              class="list-group mt-3 min-h"
              :list="wen"
              group="tasks"
              item-key="id"
            >
              <template #item="{ element, index }">
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text">{{ element.name }} </span>
                  <i
                    class="fa fa-times close align-self-center"
                    @click="removeAt(index, wen)"
                  ></i>
                </div>
              </template>
            </draggable>
          </to-do-list>
        </div>
      </div>
      <div class="col-lg col-6 mb-lg-3 mb-0">
        <div id="Thursday" class="container p-3 bg-white my-rounded">
          <to-do-list title="Thursday">
            <draggable
              class="list-group mt-3 min-h"
              :list="thu"
              group="tasks"
              item-key="id"
            >
              <template #item="{ element, index }">
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text">{{ element.name }} </span>
                  <i
                    class="fa fa-times close align-self-center"
                    @click="removeAt(index, thu)"
                  ></i>
                </div>
              </template>
            </draggable>
          </to-do-list>
        </div>
      </div>
      <div class="col-lg col-6 mb-lg-3 mb-0">
        <div id="Friday" class="container p-3 bg-white my-rounded">
          <to-do-list title="Friday">
            <draggable
              class="list-group mt-3 min-h"
              :list="fri"
              group="tasks"
              item-key="id"
            >
              <template #item="{ element, index }">
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text">{{ element.name }} </span>
                  <i
                    class="fa fa-times close align-self-center"
                    @click="removeAt(index, fri)"
                  ></i>
                </div>
              </template>
            </draggable>
          </to-do-list>
        </div>
      </div>
      <div class="col-lg col-6 mb-lg-3 mb-0">
        <div id="Saturday" class="container p-3 bg-white my-rounded">
          <to-do-list title="Saturday">
            <draggable
              class="list-group mt-3 min-h"
              :list="sat"
              group="tasks"
              item-key="id"
            >
              <template #item="{ element, index }">
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text">{{ element.name }} </span>
                  <i
                    class="fa fa-times close align-self-center"
                    @click="removeAt(index, sat)"
                  ></i>
                </div>
              </template>
            </draggable>
          </to-do-list>
        </div>
      </div>
      <div class="col-lg col-12 mb-3">
        <div id="Sunday" class="container p-3 bg-white my-rounded">
          <to-do-list title="Sunday">
            <draggable
              class="list-group mt-3 min-h"
              :list="sun"
              group="tasks"
              item-key="id"
            >
              <template #item="{ element, index }">
                <div class="list-group-item d-flex justify-content-between">
                  <span class="text">{{ element.name }} </span>
                  <i
                    class="fa fa-times close align-self-center"
                    @click="removeAt(index, sun)"
                  ></i>
                </div>
              </template>
            </draggable>
          </to-do-list>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/colors";
.min-h {
  min-height: 50px;
}

.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
}

.close {
  cursor: pointer;
}

.currentDay {
  background-color: $primary !important;
  color: $white !important;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import draggable from "vuedraggable";
import { firebase, db } from "@/firebase";
import router from "@/router";
import ToDoList from "@/components/ToDoList.vue";

export default {
  name: "Schedule",
  data() {
    return {
      email: window.sessionStorage
        .getItem(Object.keys(window.sessionStorage))
        .slice(47)
        .split('"')[0],
      saved: false,
      beginner: [
        {
          id: 1,
          name: "Full Body (B)",
        },
        {
          id: 2,
          name: "Abs (B)",
        },
        {
          id: 3,
          name: "Arms (B)",
        },
        {
          id: 4,
          name: "Chest (B)",
        },
        {
          id: 5,
          name: "Legs (B)",
        },
        {
          id: 6,
          name: "Back (B)",
        },
      ],
      intermediate: [
        {
          id: 1,
          name: "Full Body (I)",
        },
        {
          id: 2,
          name: "Abs (I)",
        },
        {
          id: 3,
          name: "Arms (I)",
        },
        {
          id: 4,
          name: "Chest (I)",
        },
        {
          id: 5,
          name: "Legs (I)",
        },
        {
          id: 6,
          name: "Back (I)",
        },
      ],
      advanced: [
        {
          id: 1,
          name: "Full Body (A)",
        },
        {
          id: 2,
          name: "Abs (A)",
        },
        {
          id: 3,
          name: "Arms (A)",
        },
        {
          id: 4,
          name: "Chest (A)",
        },
        {
          id: 5,
          name: "Legs (A)",
        },
        {
          id: 6,
          name: "Back (A)",
        },
      ],
      mon: [],
      tue: [],
      wen: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
      oldMon: [],
      oldTue: [],
      oldWen: [],
      oldThu: [],
      oldFri: [],
      oldSat: [],
      oldSun: [],
    };
  },
  components: {
    HeaderImage,
    draggable,
    ToDoList,
  },
  created() {
    this.getSchedule();
  },
  mounted() {
    this.getDay();
  },
  methods: {
    getSchedule() {
      db.collection("schedule")
        .doc(this.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.mon = doc.data().mon;
            this.tue = doc.data().tue;
            this.wen = doc.data().wen;
            this.thu = doc.data().thu;
            this.fri = doc.data().fri;
            this.sat = doc.data().sat;
            this.sun = doc.data().sun;
            this.oldMon = this.mon.slice();
            this.oldTue = this.tue.slice();
            this.oldWen = this.wen.slice();
            this.oldThu = this.thu.slice();
            this.oldFri = this.fri.slice();
            this.oldSat = this.sat.slice();
            this.oldSun = this.sun.slice();
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    removeAt(id, list) {
      list.splice(id, 1);
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
      let day = weekday[d.getDay()];
      $("#" + day).addClass("currentDay");
    },
    reset() {
      this.mon = [];
      this.tue = [];
      this.wen = [];
      this.thu = [];
      this.fri = [];
      this.sat = [];
      this.sun = [];
    },
    save() {
      db.collection("schedule")
        .doc(this.email)
        .set({
          mon: this.mon,
          tue: this.tue,
          wen: this.wen,
          thu: this.thu,
          fri: this.fri,
          sat: this.sat,
          sun: this.sun,
        })
        .then((doc) => {
          console.log("Schedule saved!");
          this.saved = true;
          router.push("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.saved) next();
    else if (
      JSON.stringify(this.oldMon) !== JSON.stringify(this.mon) ||
      JSON.stringify(this.oldTue) !== JSON.stringify(this.tue) ||
      JSON.stringify(this.oldWen) !== JSON.stringify(this.wen) ||
      JSON.stringify(this.oldThu) !== JSON.stringify(this.thu) ||
      JSON.stringify(this.oldFri) !== JSON.stringify(this.fri) ||
      JSON.stringify(this.oldSat) !== JSON.stringify(this.sat) ||
      JSON.stringify(this.oldSun) !== JSON.stringify(this.sun)
    ) {
      const answer = window.confirm(
        "Do you really want to leave? Progress won't be saved!"
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      console.log("Unchanged");
      next();
    }
  },
};
</script>
