let returnProducts  =    document.querySelectorAll(".return-products");
let cancelOrder     =    document.querySelectorAll(".cancel-order");
let body            =    document.getElementsByTagName("body");
let loader          =    document.querySelector(".loader");

// Hide the element After clicking on cancel order button
cancelOrder.forEach((val, ind) => {
     val.addEventListener("click", () => {
          cancelOrder[ind].disabled = true;
          loader.classList.add("bg-white/70");
          loader.classList.toggle("hidden");
          setTimeout(() => {
               returnProducts[ind].classList.toggle("hidden");
               loader.classList.remove("bg-white/70");
               loader.classList.toggle("hidden");
          }, 3000);
     })
})