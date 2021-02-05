import { a, article, div, h3, h4, img, p } from "slam-js";

export function Card({ imgsrc, imgAlt, header, description, status, tech, source, sourceCode, liveLink }) {
  return (
    article({ class: "card" },
      img({ class: "card-img", src: imgsrc, alt: imgAlt}),
      div({ class: "card-content" },
        h3({ class: "card-content-header" }, header),
        p({class: "card-content-description"}, description),
        div({class: "card-table"},
          div({class: "card-table-item"},
            h4({class: "card-table-item-header"}, "Status"),
            p({class: "card-table-item-content"}, status)
          ),
          div({class: "card-table-item"},
            h4({class: "card-table-item-header"}, "Main Technology"),
            p({class: "card-table-item-content"}, tech)
          ),
          div({class: "card-table-item"},
            h4({class: "card-table-item-header"}, "Source"),
            p({class: "card-table-item-content"}, source)
          ),
        ),
        div({class: "card-actions"},
          a({class: "card-actions-link", href: sourceCode, target: "_blank" }, "View Code"),
          liveLink ? a({ class: "card-actions-link", href: liveLink, target: "_blank" }, "View Live") : ""
        )
      )
    )
  );
}
