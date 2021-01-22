import { div } from "slam-js";

const Collection = (...children) => {
  return div({ class: "collection" }, ...children);
};

export { Collection };
