import { path, svg } from "slam-js";

export function AngleIcon() {
  return svg({class: "angle", viewBox: "0 0 10 8", width: "20px", height: "15px" },
    path({ "d": "M2 2 L5 5 L8 2", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round", "fill-opacity": 0 })
  );
}
