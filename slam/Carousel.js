import { div } from "slam-js";
import { AngleIcon } from "./AngleIcon.js";

const Carousel = (...items) => {
  return div({ class: "carousel" }, AngleIcon(), div({ class: "carousel-content" }, ...items), AngleIcon({ pointRight: true }));
};

export { Carousel };
