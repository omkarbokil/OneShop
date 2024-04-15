let returnProducts  =    document.querySelectorAll(".return-products");
let cancelOrder     =    document.querySelectorAll(".cancel-order");
let body            =    document.getElementsByTagName("body");
let loader          =    document.querySelector(".loader");

// Hide the element After clicking on cancel order button
cancelOrder.forEach((val, ind) => {
     val.addEventListener("click", () => {
          cancelOrder[ind].disabled = true;
          loader.classList.toggle("hidden");
          loader.classList.add("bg-white/70");
          setTimeout(() => {
               returnProducts[ind].classList.toggle("hidden");
               loader.classList.remove("bg-white/70");
               loader.classList.toggle("hidden");
          }, 3000);
     })
});

// returnProducts.forEach((val, ind) => {
     // localStorage.setItem(ind, val);

     // let s = localStorage.key(ind)
     // console.log(s, typeof(s), typeof(ind));
     // returnProducts[Number(s)].classList.add("bg-black");
// })

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
