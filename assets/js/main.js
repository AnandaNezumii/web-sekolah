// alert
function message() {
  var name = window.prompt("Halo Teman, Silahkan Input Nama Anda");
  alert("Halo " + name + ", Selamat Datang di Website SMK Negeri 19 Jakarta");
}

//Scroll to TOP
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 600) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#05386b ${scrollValue}%, #ddd ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onclick = calcScrollValue;

// carousel
$(document).ready(function () {
  $("#slider-jumbotron").owlCarousel({
    loop: true,
    nav: true,
    // mouseDrag: false,
    items: 1,
    dots: false,
    margin: 0,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    navContainer: "#slider-jumbotron-nav",
  });

  $("#tenaga-pendidik-slider").owlCarousel({
    loop: true,
    nav: true,
    // mouseDrag: false,
    items: 3,
    dots: false,
    margin: 20,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    navContainer: "#slider-tools-1",
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $("#galeri-slider").owlCarousel({
    loop: true,
    nav: true,
    // mouseDrag: false,
    items: 3,
    dots: false,
    margin: 20,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    navContainer: "#slider-tools-2",
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});

// Kalender
function displayCalendar(month, year) {
  var monthNow = new Date().getMonth();
  var yearNow = new Date().getFullYear();
  var nextMonth = month + 1;
  var prevMonth = month - 1;
  var day = 0;

  if (month == monthNow && year == yearNow) {
    var day = new Date().getDate();
  }

  var htmlContent = "";
  var FebNumberOfDays = "";
  var counter = 1;
  var Nameday = 1;

  if (month == 1) {
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
      FebNumberOfDays = 29;
    } else {
      FebNumberOfDays = 28;
    }
  }

  var monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  var monthNum = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  var dayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];
  var dayPerMonth = [
    "31",
    "" + FebNumberOfDays + "",
    "31",
    "30",
    "31",
    "30",
    "31",
    "31",
    "30",
    "31",
    "30",
    "31",
  ];
  var nextDate = new Date(nextMonth + " 1 ," + year);
  var weekdays = nextDate.getDay();
  var weekdays2 = weekdays;
  var numOfDays = dayPerMonth[month];

  while (weekdays > 0) {
    htmlContent += "<li style='padding:1 0 0;'></li>";
    weekdays--;
  }

  while (counter <= numOfDays) {
    if (weekdays2 > 6) {
      weekdays2 = 0;
      htmlContent += "</ul><ul>";
    }
    if (counter == day) {
      htmlContent += "<li class='dayNow'>" + counter + "</li>";
      Nameday = counter;
    } else {
      htmlContent += "<li>" + counter + "</li>";
    }
    weekdays2++;
    counter++;
  }

  document.getElementById("monthNow").innerHTML =
    monthNames[month] + " " + year;
  document.getElementById("daysNum").innerHTML =
    "<ul id=" +
    monthNum[month] +
    " class=" +
    year +
    ">" +
    htmlContent +
    "</ul>";
}

(function () {
  var dateNow = new Date();
  var month = dateNow.getMonth();
  var year = dateNow.getFullYear();
  displayCalendar(month, year);
})(window);

document.getElementById("nextMonth").onclick = function () {
  var idmonth = document.getElementById("daysNum");
  var month = idmonth.getElementsByTagName("ul")[0].id;
  var nextYear = idmonth.getElementsByTagName("ul")[0].className;
  var nextMonth = Number(month);
  if (nextMonth == 12) {
    nextMonth = 0;
    nextYear = Number(nextYear) + 1;
  }
  displayCalendar(nextMonth, nextYear);
};

document.getElementById("prevMonth").onclick = function () {
  var idmonth = document.getElementById("daysNum");
  var month = idmonth.getElementsByTagName("ul")[0].id;
  var prevYear = idmonth.getElementsByTagName("ul")[0].className;
  var prevMonth = Number(month) - 2;
  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear = Number(prevYear) - 1;
  }
  displayCalendar(prevMonth, prevYear);
};
