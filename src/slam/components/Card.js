import { a, article, br, div, h3, img, p, table, tbody, td, th, thead, tr } from "slam-js";

export function Card({ imgsrc, header, description, status, tech, source, sourceCode, liveLink }) {
  return (
    article({ class: "card" },
      img({ src: imgsrc }),
      div({ class: "card-content" },
        h3(header),
        p(description),
        table(
          thead(
            th("Status"),
            th("Main Technology"),
            th("Source")
          ),
          tbody(
            tr(
              td(status),
              td(tech),
              td(source)
            )
          )
        ),
        div(
          a({ href: sourceCode }, "View Code"),
          liveLink ? a({ href: liveLink }, "View Live") : ""
        )
      )
    )
  );
}
