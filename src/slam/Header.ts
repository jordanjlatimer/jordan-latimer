import { a, div, header, li, nav, ul } from "slam-js";
import { HamburgerIcon } from "./HamburgerIcon";

const Header = () => {
  return (
    div({ class: "header-wrapper" },
      header(
        div("Jordan Latimer"),
        HamburgerIcon(),
        nav(
          ul(
            li(a({ href: "index" }, "Home")),
            li(a({ href: "about" }, "About")),
            li(a({ href: "skills" }, "Skills")),
            li(a({ href: "projects" }, "Projects")),
            li(a({ href: "blog" }, "Blog")),
            li(a({ href: "contact" }, "Contact"))
          )
        )
      )
    )
  )
}

export { Header };
