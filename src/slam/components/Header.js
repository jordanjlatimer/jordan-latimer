import { a, div, header, li, nav, ul } from "slam-js";
import { HamburgerIcon } from "./icons/Hamburger.js";

export function Header() {
  return div(
    { class: "header-wrapper" },
    header(
      div("Jordan Latimer"),
      HamburgerIcon(),
      nav(
        ul(
          li(a({ href: "index" }, "Home")),
          li(a({ href: "projects" }, "Projects")),
          li(a({ href: "skills" }, "Skills")),
          li(a({ href: "about" }, "About")),
          li(a({ href: "blog" }, "Blog")),
          li(a({ href: "contact" }, "Contact"))
        )
      )
    )
  );
}
