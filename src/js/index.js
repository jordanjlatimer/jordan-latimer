import styles from "../sass/index.sass";

//Menu collapse and open.
let hamburger = document.querySelector("header svg");
let links = document.querySelector("header ul");
hamburger.addEventListener("click", () => {
  if (links.className === "") {
    links.className = "open";
  } else {
    links.className = "";
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    links.className = "";
  }
});

//Carousel functionality.
document.getElementsByClassName("carousel")