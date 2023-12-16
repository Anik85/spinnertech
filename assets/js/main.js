var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".client_swiper-button-next",
    prevEl: ".client_swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper2 = new Swiper(".banner_slider", {
  slidesPerView: 1,

  navigation: {
    nextEl: ".banner_slider_next",
    prevEl: ".banner_slider_prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

new WOW().init();

const tabElements1 = [
  {
    id: "profile",
    triggerEl: document.querySelector("#profile-tab-example"),
    targetEl: document.querySelector("#profile-example"),
  },
  {
    id: "dashboard",
    triggerEl: document.querySelector("#dashboard-tab-example"),
    targetEl: document.querySelector("#dashboard-example"),
  },
  {
    id: "settings",
    triggerEl: document.querySelector("#settings-tab-example"),
    targetEl: document.querySelector("#settings-example"),
  },
  {
    id: "contacts",
    triggerEl: document.querySelector("#contacts-tab-example"),
    targetEl: document.querySelector("#contacts-example"),
  },
];

// options with default values
const options1 = {
  defaultTabId: "settings",
  activeClasses: "text-red-600 hover:text-blue-600 border-green-600",
  inactiveClasses: "text-gray-500 hover:text-green-600 hover:border-gray-300 ",
};

new Tabs(tabElements1, options1);

const tabElements = [
  {
    id: "businessSolution",
    triggerEl: document.querySelector("#businessSolution-tab"),
    targetEl: document.querySelector("#businessSolution-content"),
  },
  {
    id: "blockchain",
    triggerEl: document.querySelector("#blockchain-tab"),
    targetEl: document.querySelector("#blockchain-content"),
  },
  {
    id: "ecommerce",
    triggerEl: document.querySelector("#ecommerce-tab"),
    targetEl: document.querySelector("#ecommerce-content"),
  },
  {
    id: "health",
    triggerEl: document.querySelector("#health-tab"),
    targetEl: document.querySelector("#health-content"),
  },
  {
    id: "education",
    triggerEl: document.querySelector("#education-tab"),
    targetEl: document.querySelector("#education-content"),
  },
  {
    id: "newsPortal",
    triggerEl: document.querySelector("#newsPortal-tab"),
    targetEl: document.querySelector("#newsPortal-content"),
  },
  {
    id: "onlineReservation",
    triggerEl: document.querySelector("#onlineReservation-tab"),
    targetEl: document.querySelector("#onlineReservation-content"),
  },
  {
    id: "other",
    triggerEl: document.querySelector("#other-tab"),
    targetEl: document.querySelector("#other-content"),
  },
];

// options with default values
const options = {
  defaultTabId: "businessSolution",
  activeClasses:
    "py-3  w-full text-start hover:bg-[#DBF5CD] hover:text-[#40A40B] hover:pl-4 ",
  inactiveClasses:
    "py-3 w-full text-start hover:bg-[#DBF5CD] hover:text-[#40A40B] hover:pl-4 duration-300",
};

const tabs = new Tabs(tabElements, options);

// const tabElements = [
//   {
//     id: "profile",
//     triggerEl: document.querySelector("#profile-tab-example"),
//     targetEl: document.querySelector("#profile-example"),
//   },
//   {
//     id: "dashboard",
//     triggerEl: document.querySelector("#dashboard-tab-example"),
//     targetEl: document.querySelector("#dashboard-example"),
//   },
//   {
//     id: "settings",
//     triggerEl: document.querySelector("#settings-tab-example"),
//     targetEl: document.querySelector("#settings-example"),
//   },
//   {
//     id: "contacts",
//     triggerEl: document.querySelector("#contacts-tab-example"),
//     targetEl: document.querySelector("#contacts-example"),
//   },
// ];

// // options with default values
// const options = {
//   defaultTabId: "settings",
//   activeClasses: "text-red-600 hover:text-blue-600 border-green-600",
//   inactiveClasses:
//     "text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
// };

// const tabs = new Tabs(tabElements, options);
