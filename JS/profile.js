let uploadPicture = document.querySelector("#upload_picture");
let upIcon = document.querySelector("#up_icon");

upIcon.addEventListener("mouseenter", () =>{
     uploadPicture.classList.remove("hidden");
})

upIcon.addEventListener("mouseleave", () =>{
     uploadPicture.classList.add("hidden");
})