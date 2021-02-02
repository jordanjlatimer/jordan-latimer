import styles from "../sass/index.sass";

//Menu collapse and open.
let hamburger = document.getElementById("nav-toggle");
let links = document.querySelector("nav > ul");
hamburger.addEventListener("click", () => {
  console.log("clicked");
  if (links.className === "") {
    links.className = "open";
  } else {
    links.className = "";
  }
});

let subnavs = document.getElementsByClassName("subnav");
for (const element of subnavs) {
  const toggler = element.querySelector(".subnav-toggle");
  const list = element.querySelector(".subnav-list");
  toggler.addEventListener("click", () => {
    if (toggler.className === "subnav-toggle") {
      toggler.className += " open";
    } else {
      toggler.className = "subnav-toggle";
    }
    if (list.className === "subnav-list") {
      list.className += " open";
    } else {
      list.className = "subnav-list";
    }
  });
  document.addEventListener("click", ev => {
    if (!toggler.contains(ev.target)) {
      toggler.className = "subnav-toggle";
      list.className = "subnav-list";
    }
  });
  ["scroll", "touchmove"].forEach(eventType => {
    document.addEventListener(eventType, () => {
      toggler.className = "subnav-toggle";
      list.className = "subnav-list";
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    links.className = "";
  }
});
