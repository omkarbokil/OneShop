let itemOne = document.querySelectorAll(".item-1");
let itemCard1 = document.querySelectorAll(".item-card-1");
let buyNow = document.querySelectorAll(".buy-now");
let offer = document.querySelectorAll(".offer");
let offer1 = document.querySelectorAll(".offer1");
let productName = document.querySelectorAll(".product_name");
let ok = document.querySelectorAll("#ok");
let products = document.querySelector(".products");

// function product(){
//      window.location.href = "/HTML/OneShop/product.html";
//      console.log(innerHTML);
// }

// products.addEventListener("click", () => {
//      productName.forEach((val) => {
//           let a = val;
//           console.log(val);
//      })
// })

// productName.forEach((val) => {
//      console.log(val);
//      ok.innerHTML = 'Done';
// })

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
     // collapsibleMenu.classList.toggle("hidden");
     collapsibleMenu.style.top = 0;
     // collapsibleMenuClose.classList.toggle("hidden");
})

collapsibleMenuClose.addEventListener("click", () => {
     // collapsibleMenu.classList.toggle("hidden");
     collapsibleMenu.style.top = "-50rem";
     // collapsibleMenuClose.classList.toggle("hidden");
})

// Add To Cart
let addToCart = document.querySelectorAll(".add-to-cart");
let addToCartCount = document.querySelector(".add-to-cart-count");
let count = 0;

addToCart.forEach((val) => {
     val.addEventListener("click", ()=> {
          count += 1;
          console.log(count);
          addToCartCount.innerText = count;
          addToCartCount.classList.remove("hidden");
     })
})