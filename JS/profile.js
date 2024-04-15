let uploadPicture = document.querySelector("#upload_picture");
let upIcon = document.querySelector("#up_icon");
let body = document.getElementsByTagName("body");

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

// Dark Light Mode
let modeSwitch = document.querySelectorAll("#mode-switch");
let darkMode = document.querySelectorAll("#dark-mode");
let lightMode = document.querySelectorAll("#light-mode");

let getMode = localStorage.getItem("darklight");
if(getMode == null){
     let darkOrLight = 1;
     localStorage.setItem("darklight", darkOrLight);
}

getMode = localStorage.getItem("darklight");

if(getMode == 1){
     lightMode.forEach((val) => {
          val.classList.toggle("hidden");
     })
     body[0].classList.remove("dark");
}
else{
     darkMode.forEach((val) => {
          val.classList.toggle("hidden");
     })
     body[0].classList.add("dark");
}

modeSwitch.forEach((val, ind) => {
     val.addEventListener("click", () => {
          if(localStorage.getItem("darklight") == 1){
               darkMode[ind].classList.toggle("hidden");
               darkMode[ind].classList.add("animate-mode");
               lightMode[ind].classList.remove("animate-mode");
               lightMode[ind].classList.toggle("hidden");
               localStorage.setItem("darklight", 2);
               body[0].classList.toggle("dark");
          }
          else{
               lightMode[ind].classList.toggle("hidden");
               lightMode[ind].classList.add("animate-mode");
               darkMode[ind].classList.remove("animate-mode");
               darkMode[ind].classList.toggle("hidden");
               localStorage.setItem("darklight", 1);
               body[0].classList.toggle("dark");
          }
     })
})