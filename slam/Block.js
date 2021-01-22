import { div, h2, section } from "slam-js";

const Block = ({ reversed, title, content }) => {
  return section(
    { class: "block" + (reversed ? " reversed" : "") },
    div({ class: "block-title" }, h2(title)),
    div({ class: "block-content" }, ...content)
  );
};

export { Block };
