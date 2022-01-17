<template>
  <div class="text-white">
    <div class="header-image">
      <img class="img" alt="FitActive Logo" src="@/assets/welcome.jpg" />
      <div class="title">Calendar</div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6 text-center">
        <FullCalendar :options="calendarOptions" />
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div>

  <h2><b>Today</b></h2>

  <div class="container p-1">
    <div class="row">
      <div class="col-sm col-sm"></div>
      <div class="col-lg col-md-6">
        <router-link to="/setupprofile">
          <button class="btn my-btn bg-primary box-shadow">
            Legs-B
          </button></router-link
        >
      </div>
      <div class="col-lg col-md"></div>
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
