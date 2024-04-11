// Offer
let offer = document.querySelectorAll(".offer");
let offer1 = document.querySelectorAll(".offer1");

offer.forEach((val, ind) => {
     val.addEventListener("mouseenter", () => {
          offer1[ind].classList.remove("hidden");
     })
})

offer.forEach((val, ind) => {
     val.addEventListener("mouseleave", () => {
          offer1[ind].classList.add("hidden");
     })
})

// Collapsible Menu
let collapsibleMenuOpen = document.querySelector("#collapsible-menu-open");
let collapsibleMenuClose = document.querySelector("#collapsible-menu-close");
let collapsibleMenu = document.querySelector("#collapsible-menu");
let navbar = document.querySelector("#navbar");
let footer = document.querySelector("#footer");

collapsibleMenuOpen.addEventListener("click", () => {
     collapsibleMenu.style.top = 0;
})

collapsibleMenuClose.addEventListener("click", () => {
     collapsibleMenu.style.top = "-50rem";
})