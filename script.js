let menu = document.querySelector("#menu-icon");
let navLinks=document.querySelector('.nav_links')
menu.onclick = ()=>{
  menu.classList.toggle('bx-x');
  navLinks.classList.toggle('open');
}
  
const header = document.querySelector("header");

window.onscroll = function() {
  if (window.pageYOffset > 150) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
  