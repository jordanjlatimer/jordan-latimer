import { div } from "slam-js";

export function Collection(...children) {
  return div({ class: "collection" }, ...children);
}
