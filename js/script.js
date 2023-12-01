// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });
// var swiper = new Swiper(".slide-content1", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination1",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next1",
//       prevEl: ".swiper-button-prev1",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });




var swiper = new Swiper(".slide-container-event", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".slide-container-event1", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});


  

const body = document.querySelector("body"),
nav = document.querySelector("nav"),
//   modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
siderbarClose = document.querySelector(".siderbarClose");

//   let getMode = localStorage.getItem("mode");
//       if(getMode && getMode === "dark-mode"){
//         body.classList.add("dark");
//       }

// js code to toggle dark and light mode
//    modeToggle.addEventListener("click" , () =>{
  //  modeToggle.classList.toggle("active");
//     body.classList.toggle("dark");

//     // js code to keep user selected mode even page refresh or file reopen
//     if(!body.classList.contains("dark")){
//         localStorage.setItem("mode" , "light-mode");
//     }else{
//         localStorage.setItem("mode" , "dark-mode");
//     }
//  });

// js code to toggle search box
  searchToggle.addEventListener("click" , () =>{
  searchToggle.classList.toggle("active");
});


//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
nav.classList.add("active");
});

body.addEventListener("click" , e =>{
let clickedElm = e.target;

if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
  nav.classList.remove("active");
}
});

  

