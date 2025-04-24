const navBtn = document.getElementById("nav-btn-toggle");
const navBar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-navbar");
console.log(navBtn); 
navBtn.addEventListener("click",()=>{
    navBar.classList.add("active-navbar");
    
})

closeBtn.addEventListener("click",()=>{
    navBar.classList.remove("active-navbar");
})