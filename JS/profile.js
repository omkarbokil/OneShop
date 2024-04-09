let uploadPicture = document.querySelector("#upload_picture");
let upIcon = document.querySelector("#up_icon");

upIcon.addEventListener("mouseenter", () =>{
     uploadPicture.classList.remove("hidden");
})

upIcon.addEventListener("mouseleave", () =>{
     uploadPicture.classList.add("hidden");
})

// Collapsible Menu
let collapsibleMenuOpen = document.querySelector("#collapsible-menu-open");
let collapsibleMenuClose = document.querySelector("#collapsible-menu-close");
let collapsibleMenu = document.querySelector("#collapsible-menu");
let navbar = document.querySelector("#navbar");
let footer = document.querySelector("#footer");

collapsibleMenuOpen.addEventListener("click", () => {
     // collapsibleMenu.classList.toggle("hidden");
     collapsibleMenu.style.top = 0;
     // collapsibleMenuClose.classList.toggle("hidden");
})

collapsibleMenuClose.addEventListener("click", () => {
     // collapsibleMenu.classList.toggle("hidden");
     collapsibleMenu.style.top = "-50rem";
     // collapsibleMenuClose.classList.toggle("hidden");
})