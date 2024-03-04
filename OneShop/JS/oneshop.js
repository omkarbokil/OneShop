let itemOne = document.querySelectorAll(".item-1");
let itemCard1 = document.querySelectorAll(".item-card-1");
let buyNow = document.querySelectorAll(".buy-now");
let offer = document.querySelectorAll(".offer");
let offer1 = document.querySelectorAll(".offer1");
let uploadPicture = document.querySelector("#upload_picture")
let upIcon = document.querySelector("#up_icon")
let productName = document.querySelectorAll(".product_name")
let ok = document.querySelectorAll("#ok")
let products = document.querySelector(".products")

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

upIcon.addEventListener("mouseenter", () =>{
     uploadPicture.classList.remove("hidden");
})

upIcon.addEventListener("mouseleave", () =>{
     uploadPicture.classList.add("hidden");
})