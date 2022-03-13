<template>
  <div class="container text-center p-3 bg-white my-rounded mt-5">
    <div class="row m-0">
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
  </div>

  <div class="container">
    <div class="row m-0 g-3 mt-5">
      <div class="col-lg col-6">
        <div id="Monday" class="p-4 bg-white my-rounded">
          <to-do-list title="Monday">
            <draggable
              class="list-group mt-3 min-h"
              :list="mon"
              group="tasks"
              item-key="id"
            >
              <template #header>
                <button class="btn my-btn bg-primary" @click="clear(mon)">
                  Clear
                </button>
              </template>
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
      <div class="col-lg col-6">
        <div id="Tuesday" class="p-4 bg-white my-rounded">
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
      <div class="col-lg col-6">
        <div id="Wednesday" class="p-4 bg-white my-rounded">
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
      <div class="col-lg col-6">
        <div id="Thursday" class="p-4 bg-white my-rounded">
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
      <div class="col-lg col-6">
        <div id="Friday" class="p-4 bg-white my-rounded">
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
      <div class="col-lg col-6">
        <div id="Saturday" class="p-4 bg-white my-rounded">
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
      <div class="col-lg col-12">
        <div id="Sunday" class="p-4 bg-white my-rounded">
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
  <div class="container">
    <div class="row">
      <div class="col mx-auto">
        <button
          type="button"
          @click="reset()"
          class="btn my-btn border box-shadow p-2"
        >
          Reset
        </button>
      </div>
      <div class="col">
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
import ToDoItem from "@/components/ToDoItem.vue";
import ToDoList from "@/components/ToDoList.vue";
import draggable from "vuedraggable";

export default {
  name: "WorkoutSchedule",
  data() {
    return {
      drag: false,
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
    };
  },
  components: {
    HeaderImage,
    ToDoList,
    ToDoItem,
    draggable,
  },
  mounted() {
    this.getDay();
  },
  methods: {
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
    clear(list) {
      console.log("list", list);
      list = [];
      console.log("list", list);
    },
  },
};
</script>
