<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-lg col-md"></div>
      <div class="col-lg col-md-6 text-center">
        <FullCalendar :options="calendarOptions" />
      </div>
      <div class="col-lg col-md"></div>
    </div>
  </div> -->

  <div style="margin: 100px; float: left">
    <input
      id="timepkr"
      style="width: 100px; float: left"
      class="form-control"
      placeholder="HH:MM"
    />
    <button
      type="button"
      class="btn btn-primary"
      onclick="showpickers('timepkr',24)"
      style="width: 40px; float: left"
    >
      <i class="fa fa-clock-o"></i>
    </button>
  </div>
  <div class="timepicker"></div>

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

.tpicker {
  width: 200px;
  height: auto;
  position: absolute;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 3px black;
  float: left;
  display: none;
  padding: 15px;
}
.pk1 {
  float: left;
  width: 90%;
  margin: 0 5%;
}
.hr {
  text-align: center;
  width: 30%;
  float: left;
}
.hr i {
  font-weight: bold;
  text-align: center;
  width: 100%;
  font-size: 23px;
}
.hr i:hover {
  cursor: pointer;
  color: red;
}
.hr a:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.hr a {
  padding: 2px;
  border-radius: 2px;
  text-decoration: none;
  font-size: 18px;
  width: 100%;
  text-align: center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.pk1 .dot {
  width: 30%;
  float: left;
}
.pk1 .dot2 {
  margin-top: 28px;
  width: 10%;
  text-align: center;
  float: left;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.pk1 .dot button {
  width: 100%;
  margin-top: 22px;
}
.pk2 {
  display: none;
}
.pk2 table {
  margin: 0px;
  padding: 0;
}
.pk2 table td {
  text-align: center;
  border-radius: 2px;
  border: solid 0.5px lightgrey;
}
.pk2 table td:hover {
  background-color: lightgrey;
  cursor: pointer;
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

var fhr = 12;
var fmi = 0;
var ampm = 0;
var showpicker = 0;
var elid = "none";
var picker_type = 0;

function showpickers(a, b) {
  if (showpicker) {
    $(".tpicker").hide();
    showpicker = 0;
  } else {
    elid = a;
    picker_type = b;
    var x = $("#" + elid).offset();
    $(".tpicker").show();
    var kk = $("#" + elid).outerHeight();
    $(".tpicker").offset({ top: x.top + kk, left: x.left });
    showpicker = 1;
  }
}

function showdate() {
  $(".pk1").show();
  $(".pk2").hide();
}
function showtime() {
  $(".pk1").hide();
  $(".pk2").show();
}
function updatetime() {
  var gg = "AM";
  if (ampm) gg = "PM";
  if (picker_type == 24) {
    var thr = fhr;
    var tmin = fmi;
    if (ampm) {
      if (fhr < 12) thr = fhr + 12;
    } else {
      if (fhr == 12) thr = 0;
    }
    $("#" + elid).val(("0" + thr).slice(-2) + ":" + ("0" + tmin).slice(-2));
  } else {
    $("#" + elid).val(
      ("0" + fhr).slice(-2) + ":" + ("0" + fmi).slice(-2) + " " + gg
    );
  }
  $(".hrhere").html(("0" + fhr).slice(-2));
  $(".minhere").html(("0" + fmi).slice(-2));
  $(".medchange").html(gg);
}

$(function () {
  var pickerhtml =
    '<div class="tpicker"><div class="pk1"><div class="row"><div class="hr"><i class="fa fa-angle-up hrup"></i><a class="hrhere">12</a><i class="fa fa-angle-down hrdown"></i></div><div class="dot2">:</div><div class="hr">	<i class="fa fa-angle-up minup"></i><a class="minhere">00</a><i class="fa fa-angle-down mindown"></i></div><div class="dot"><button type="button" class="btn btn-primary medchange">AM</button></div></div></div><div class="pk2 mintt"><table class="table table-bordered mintable"><tr><td>00</td><td>05</td><td>10</td><td>15</td></tr><tr><td>20</td><td>25</td><td>30</td><td>35</td></tr><tr><td>40</td><td>45</td><td>50</td><td>55</td></tr></table></div><div class="pk2 hrtt"><table class="table table-bordered hrtable"><tr><td>01</td><td>02</td><td>03</td><td>04</td></tr><tr><td>05</td><td>06</td><td>07</td><td>08</td></tr><tr><td>09</td><td>10</td><td>11</td><td>12</td></tr></table></div></div>';

  $(".timepicker").html(pickerhtml);

  $(".hrup").click(function () {
    if (fhr < 12) {
      fhr++;
      updatetime();
    } else {
      fhr = 1;
      updatetime();
    }
  });
  $(".hrdown").click(function () {
    if (fhr > 1) {
      fhr--;
      updatetime();
    } else {
      fhr = 12;
      updatetime();
    }
  });
  $(".minup").click(function () {
    if (fmi < 59) {
      fmi++;
      updatetime();
    } else {
      fmi = 0;
      updatetime();
    }
  });
  $(".mindown").click(function () {
    if (fmi > 0) {
      fmi--;
      updatetime();
    } else {
      fmi = 59;
      updatetime();
    }
  });
  $(".medchange").click(function () {
    if (ampm) {
      ampm = 0;
      updatetime();
    } else {
      ampm = 1;
      updatetime();
    }
  });
  $(".hrhere").click(function () {
    $(".hrtt").show();
    $(".pk1").hide();
    $(".mintt").hide();
  });
  $(".minhere").click(function () {
    $(".hrtt").hide();
    $(".pk1").hide();
    $(".mintt").show();
  });
  $(".hrtable td").click(function () {
    var vaa = $(this).html();
    $(".hrtt").hide();
    $(".pk1").show();
    $(".mintt").hide();
    fhr = parseInt(vaa);
    updatetime();
  });
  $(".mintable td").click(function () {
    var vaa = $(this).html();
    $(".hrtt").hide();
    $(".pk1").show();
    $(".mintt").hide();
    fmi = parseInt(vaa);
    updatetime();
  });
});
</script>
