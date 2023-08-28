const toggle_nav = () => {
  document.querySelector("body > .mobile-nav").classList.toggle("active");
};
document.querySelector(".mobile-toggle").addEventListener("click", toggle_nav);

document.querySelector(".close-mobile").addEventListener("click", toggle_nav);
