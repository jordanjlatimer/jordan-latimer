import { a, div, header, li, nav, p, ul } from "slam-js";
import { AngleIcon } from "./icons/Angle.js";
import { HamburgerIcon } from "./icons/Hamburger.js";

export function Header() {
  return div(
    { class: "header-wrapper" },
    header(
      p("Jordan Latimer"),
      HamburgerIcon(),
      nav(
        ul(
          li(a({ href: "index.html" }, "Home")),
          li(a({ href: "#projects" }, "Projects")),
          li(a({ href: "#skills" }, "Skills")),
          li(a({ href: "#about" }, "About")),
          li(a({ href: "#contact" }, "Contact")),
          li({class: "subnav"},
            a({class: "subnav-toggle"}, "Links", AngleIcon()),
            ul({ class: "subnav-list" },
              li(a({ target: "_blank", href: "https://dev.to/jordanjlatimer" }, "Blog")),
              li(a({ target: "_blank", href: "https://linkedin.com/in/jordanjlatimer" }, "LinkedIn")),
              li(a({ target: "_blank", href: "https://github.com/jordanjlatimer" }, "Github")),
              li(a({ target: "_blank", href: "https://stackoverflow.com/users/12126897/jordanjlatimer" }, "StackOverflow"))
            )
          )
        )
      )
    )
  );
}
