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
     // collapsibleMenu.classList.toggle("hidden");
     collapsibleMenu.style.top = 0;
     // collapsibleMenuClose.classList.toggle("hidden");
})

collapsibleMenuClose.addEventListener("click", () => {
     // collapsibleMenu.classList.toggle("hidden");
     collapsibleMenu.style.top = "-50rem";
     // collapsibleMenuClose.classList.toggle("hidden");
})
