<template>
  <div class="container">
    <div class="row m-0 mt-5">
      <div class="col tablica">Monday</div>
      <div class="col tablica">Tuesday</div>
      <div class="col tablica">Wednesday</div>
      <div class="col tablica">Thursday</div>
      <div class="col tablica">Friday</div>
      <div class="col tablica">Saturday</div>
      <div class="col tablica">Sunday</div>
    </div>
  </div>

  <div class="container">
    <div class="row1 row m-0 mt-5">
      <div class="col"></div>
      <div class="col">Full Body</div>
      <div class="col">Abs</div>
      <div class="col">Arms</div>
      <div class="col">Chest</div>
      <div class="col">Legs</div>
      <div class="col">Back</div>
    </div>
    <div class="row2 row m-0">
      <div class="col">Beginner</div>
      <div class="col">Full Body-B</div>
      <div class="col">Abs-B</div>
      <div class="col">Arms-B</div>
      <div class="col">Chest-B</div>
      <div class="col">Legs-B</div>
      <div class="col">Back-B</div>
    </div>
    <div class="row3 row m-0">
      <div class="col">Intermediate</div>
      <div class="col">Full Body-I</div>
      <div class="col">Abs-I</div>
      <div class="col">Arms-I</div>
      <div class="col">Chest-I</div>
      <div class="col">Legs-I</div>
      <div class="col">Back-I</div>
    </div>
    <div class="row4 row m-0">
      <div class="col">Advanced</div>
      <div class="col">Full Body-A</div>
      <div class="col">Abs-A</div>
      <div class="col">Arms-A</div>
      <div class="col">Chest-A</div>
      <div class="col">Legs-A</div>
      <div class="col">Back-A</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: 50% 23%;
}

.col {
  border-style: groove;
  text-align: center;
}

.tablica {
  border-style: solid;
  height: 300px;
  text-align: center;
}
</style>

<script>
// @ is an alias to /src
import HeaderImage from "@/components/HeaderImage.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  name: "Calendar",
  components: {
    HeaderImage,
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
      },
    };
  },
};
</script>
