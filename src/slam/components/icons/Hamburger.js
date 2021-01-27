import { rect, svg } from "slam-js";

export function HamburgerIcon() {
  return svg(
    { viewBox: "0 0 20 13", width: "30px", height: "19.5px", id: "nav-toggle" },
    ...[0, 5, 10].map(value => {
      return rect({ x: 0, y: value, width: 20, height: 3, rx: 1 });
    })
  );
}
