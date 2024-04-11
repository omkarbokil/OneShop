
// Items - Today's Deals
let itemOne = document.querySelectorAll(".item-1");
let buyNow = document.querySelectorAll(".buy-now");

itemOne.forEach((val, ind) => {
     val.addEventListener("mouseenter", () => {
          buyNow[ind].classList.remove("hidden");
     })
})

itemOne.forEach((val, ind) => {
     val.addEventListener("mouseleave", () => {
          buyNow[ind].classList.add("hidden");
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

// Add To Cart
let addToCart = document.querySelectorAll(".add-to-cart");
let addToCartCount = document.querySelector(".add-to-cart-count");
let count = Number(localStorage.getItem(0));

addToCart.forEach((val, ind) => {
     val.addEventListener("click", ()=> {
          count += 1;
          localStorage.setItem(0, count)
          addToCartCount.innerText = localStorage.getItem(0);
     })
})

if(localStorage.getItem(0) > 0)
{
     addToCartCount.innerText = localStorage.getItem(0);
}