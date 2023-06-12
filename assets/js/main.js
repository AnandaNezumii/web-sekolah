// alert
function message() {
  var name = window.prompt("Halo Teman, Silahkan Input Nama Anda");
  alert("Halo " + name + ", Selamat Datang di Website SMK Negeri 19 Jakarta");
}

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

//spreadsheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzy2svt52Yr6OsAHxhsb4KACL0SAkEvMr1mgBFLNslajB1O9vKeYKwH7a0JskWAgPF5yQ/exec";
const form = document.forms["school-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampil tombol loading, hilang tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampil tombol kirim, hilang tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //tampil alert
      myAlert.classList.toggle("d-none");
      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Script alert
var alertList = document.querySelectorAll(".alert");
var alerts = [].slice.call(alertList).map(function (element) {
  return new bootstrap.Alert(element);
});
