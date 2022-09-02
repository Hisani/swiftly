alert('hello world! This page is under development');

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", navToggle);

function navToggle() {
  navtogglern.classlist.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeeight = nav.scrollHeight + "px";
  }
  else {
    nav.removeAttribute("style");
  }

}