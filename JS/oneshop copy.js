// Collapsible Menu
let collapsibleMenuOpen = document.querySelector("#collapsible-menu-open");
let collapsibleMenuClose = document.querySelector("#collapsible-menu-close");
let collapsibleMenu = document.querySelector("#collapsible-menu");
let navbar = document.querySelector("#navbar");
let footer = document.querySelector("#footer");
let body = document.getElementsByTagName("body");

collapsibleMenuOpen.addEventListener("click", () => {
     collapsibleMenu.style.top = 0;
})

collapsibleMenuClose.addEventListener("click", () => {
     collapsibleMenu.style.top = "-50rem";
})

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

// Products
let products = document.querySelectorAll(".products");
let productModal = document.querySelector(".product-modal");
let productModalClose = document.querySelector(".product-modal-close");

let productModalImg = document.getElementById("product-modal-img");
let productModalName = document.getElementById("product-modal-name");
let productModalDiscPrice = document.getElementById("product-modal-disc-price");
let productModalAccPrice = document.getElementById("product-modal-acc-price");

let productName = document.querySelectorAll(".product-name");
let discountedPrice = document.querySelectorAll(".discounted-price");
let actualPrice = document.querySelectorAll(".actual-price");

products.forEach((val, ind) => {
     val.addEventListener("click", () => {
          // Getting Values of Product Based on Index
          let imgSource = products[ind].src;
          let name = productName[ind].innerText;
          let discPrice = discountedPrice[ind].innerText;
          let accPrice = actualPrice[ind].innerText;
          
          // Setting Values
          productModalImg.src = imgSource;
          productModalName.innerText = name;
          productModalDiscPrice.innerText = discPrice;
          productModalAccPrice.innerText = accPrice;

          productModal.classList.toggle("hidden")
     })
})

productModalClose.addEventListener("click", () => {
     productModal.classList.toggle("hidden")
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