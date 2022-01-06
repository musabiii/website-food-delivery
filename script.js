const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.addEventListener('scroll',()=>{
    if (nav.classList.contains('active')) {
        nav.classList.toggle("active");
    }
})