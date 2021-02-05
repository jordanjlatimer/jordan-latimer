import styles from "../sass/index.sass";

history.scrollRestoration = "manual"
window.onunload = () => window.scrollTo(0, 0);
//Menu collapse and open.
let hamburger = document.querySelector(".header-content > svg");
let links = document.querySelector(".header-content-nav");
hamburger.addEventListener("click", () => {
  if (links.className === "header-content-nav") {
    links.className = "header-content-nav open";
  } else {
    links.className = "header-content-nav";
  }
});

let subnavs = document.getElementsByClassName("header-content-subnav");
for (const element of subnavs) {
  const toggler = element.querySelector(".header-content-subnav-toggle");
  const list = element.querySelector(".header-content-subnav-list");
  toggler.addEventListener("click", () => {
    if (toggler.className === "header-content-subnav-toggle") {
      toggler.className += " open";
    } else {
      toggler.className = "header-content-nav-item-link header-content-subnav-toggle";
    }
    if (list.className === "header-content-subnav-list") {
      list.className += " open";
    } else {
      list.className = "header-content-subnav-list";
    }
  });
  document.addEventListener("click", ev => {
    if (!toggler.contains(ev.target)) {
      toggler.className = "header-content-nav-item-link header-content-subnav-toggle";
      list.className = "header-content-subnav-list";
    }
  });
  ["scroll", "touchmove"].forEach(eventType => {
    document.addEventListener(eventType, () => {
      toggler.className = "header-content-nav-item-link header-content-subnav-toggle";
      list.className = "header-content-subnav-list";
      links.className = "header-content-nav";
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    links.className = "header-content-nav";
  }
});
