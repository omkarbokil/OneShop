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

// -------------------------------------------------------------------------------------
// Products
let products = document.querySelectorAll(".products");
let productModal = document.querySelector(".product-modal");
let productModalClose = document.querySelector(".product-modal-close");
let productName = document.querySelectorAll(".product-name");
let discountedPrice = document.querySelectorAll(".discounted-price");
let actualPrice = document.querySelectorAll(".actual-price");

// Product Modal Variables
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let discPrice = document.querySelector(".disc-price");
let accPrice = document.querySelector(".acc-price");

products.forEach((productValue, productIndex) => {
     productValue.addEventListener("click", () => {
               productData(productIndex);
               productModal.classList.toggle("hidden");
     })
})

let productData = (productIndex) => {
          // Getting Values of Product Based on Index
          let pImage = products[productIndex].src;
          let pName = productName[productIndex].innerText;
          let pDiscPrice = discountedPrice[productIndex].innerText;
          let pAccPrice = actualPrice[productIndex].innerText;
               
          // Setting Values
          image.src = pImage;
          name.innerText = pName;
          discPrice.innerText = pDiscPrice;
          accPrice.innerText = pAccPrice;
}


productModalClose.addEventListener("click", () => {
     productModal.classList.toggle("hidden")
})

// -------------------------------------------------------------------------------------
// Add To Cart
let addToCart = document.querySelectorAll(".add-to-cart");
let addToCartCount = document.querySelector(".add-to-cart-count");
let count = 0;
let shoppingCart = document.querySelector("#shopping-cart");
let cartModal = document.querySelector(".cart-modal");

let cartImage = document.querySelector(".cart-image");
let cartName = document.querySelector(".cart-name");
let cartDiscPrice = document.querySelector(".cart-disc-price");
let cartAccPrice = document.querySelector(".cart-acc-price");

let cnt = (i) => {
     count += i;
     addToCartCount.innerText = count;
}

addToCart.forEach((val, ind) => {
     val.addEventListener("click", ()=> {
          if(localStorage.getItem(ind) == null){
               localStorage.setItem(ind, 1);
               cnt(1);
          }
     })

     if(localStorage.getItem(ind) !== null){
          count += Number(localStorage.getItem(ind));
     }
     addToCartCount.innerText = count;
})

let cartToggle = 1;

shoppingCart.addEventListener("click", () => {
     if(cartToggle == 1){
          addToCart.forEach((val, ind) => {
               if(localStorage.getItem(ind) !== null){
                    cartData(ind);
               }
          })
          cartModal.style.right = "0";
          cartToggle = 2;
     }
     else{
          cartModal.style.right = "-50rem";
          cartToggle = 1;
     }
})

let cartData = (ind) => {
     // Getting Values of Product Based on Index
     let pImage = products[ind].src;
     let pName = productName[ind].innerText;
     let pDiscPrice = discountedPrice[ind].innerText;
     let pAccPrice = actualPrice[ind].innerText;
     
     // Setting Values
     cartImage = pImage;
     cartName = pName;
     cartDiscPrice = pDiscPrice;
     cartAccPrice = pAccPrice;

     // Creating New Element
     let element = document.createElement("section");

     // Adding Data and styling into created element
     element.innerHTML = `
     <div class="grid grid-cols-2 items-center dark:border-neutral-600 p-3 gap-3 rounded-md">
          <img src=${cartImage} alt="" class="max-h-32 cart-image justify-self-center">
          <div>
               <h1 class="cart-name overflow-hidden text-nowrap text-ellipsis">
                    ${cartName}
               </h1>
               <span class="cart-disc-price text-sm ">
               ${cartDiscPrice}
               </span>
               <span class="text-sm line-through cart-acc-price">
               ${cartAccPrice}
               </span>
               <div class="text-white text-sm *:rounded-full gap-2 buy-now mt-2 flex items-center">
                    <span class="material-symbols-outlined p-1 bg-slate-500 remove-qty" role="button">
                         remove
                    </span>
                    <span class="p-2 text-black dark:text-white text-lg qty-count">
                         1
                    </span>
                    <span class="material-symbols-outlined p-1 bg-slate-500 add-qty" role="button">
                         add
                    </span>
               </div>
          </div>
          <div class="text-white text-sm *:rounded-full gap-2 buy-now mt-2 grid grid-cols-2 col-span-2">
               <button class="text-black hover:scale-105 transition-all add-to-cart border-2 dark:border-neutral-600 hover:bg-[#E52E06] hover:border-[#E52E06] dark:hover:border-[#E52E06]">
                         <span class="p-2 hover:text-white dark:text-white">
                              Remove
                         </span>
                    </button>
                    <button class="bg-[#324464] hover:scale-105 transition-all px-3 py-2">
                         Buy Now
                    </button>
               </div>
     </div>
     `;
          cartModal.insertBefore(element, cartModal.childNodes[0]);
}

// -------------------------------------------------------------------------------------
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

// Quantity
let remeoveQty = document.querySelectorAll(".remove-qty");
let addQty = document.querySelectorAll(".add-qty");
let qtyCount = document.querySelectorAll(".qty-count");

remeoveQty.forEach((val) => {
     val.addEventListener("click", () => {

     })
})