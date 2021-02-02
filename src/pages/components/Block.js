import { div, h2, section } from "slam-js";

export function Block({ reversed, link, title, content }) {
  return section(
    { class: "block" + (reversed ? " reversed" : ""), id: link },
    h2({ class: reversed ? " reversed" : "" }, title),
    div({ class: "block-content" }, ...content)
  );
}
