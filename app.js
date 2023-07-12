let hambuger = document.querySelector("#hamburger");
let menu = document.querySelector("#menu");
let hlinks = document.querySelectorAll("#hlink");
let moon = document.querySelector("#moon");
let formsubmit = document.querySelector("#formsubmit");
let body = document.querySelector("body");

hambuger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hambuger.classList.toggle("bg-white")
})

hlinks.forEach((link)=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        hambuger.classList.toggle("bg-white")
    })  
})

moon.addEventListener("click", ()=>{
   body.classList.toggle("dark")
})

