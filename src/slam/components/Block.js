import { div, h2, section } from "slam-js";

export function Block({ reversed, title, content }) {
  return section(
    { class: "block" + (reversed ? " reversed" : "") },
    div({ class: "block-title" + (reversed ? " reversed" : "") }, h2(title)),
    div({ class: "block-content" }, ...content)
  );
}
