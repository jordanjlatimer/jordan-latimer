import { a, div, header, li, nav, p, ul } from "slam-js";
import { AngleIcon } from "../icons/Angle.js";
import { HamburgerIcon } from "../icons/Hamburger.js";

export function Header() {
  return (
    div({ class: "header-wrapper" },
      header({class: "header-content"},
        p({class: "header-content-title"}, "Jordan Latimer"),
        HamburgerIcon(),
        nav(
          ul({class: "header-content-nav"},
            ...[
              {href: "index.html", content: "Home"},
              {href: "#projects", content: "Projects"},
              {href: "#skills", content: "Skills"},
              {href: "#about", content: "About"},
              {href: "#contact", content: "Contact"},
            ].map(element => {
              return(
                li({class: "header-content-nav-item"}, 
                  a({ class: "header-content-nav-item-link", href: element.href }, element.content)
                )
              )
            }),
            li({class: "header-content-nav-item header-content-subnav"},
              a({class: "header-content-nav-item-link header-content-subnav-toggle"}, 
                "More", 
                AngleIcon()
              ),
              ul({class: "header-content-subnav-list"},
                ...[
                  {href: "https://dev.to/jordanjlatimer", content: "Blog"},
                  {href: "https://linkedin.com/in/jordanjlatimer", content: "LinkedIn"},
                  {href: "https://github.com/jordanjlatimer", content: "Github"},
                  {href: "https://stackoverflow.com/users/12126897/jordanjlatimer", content: "StackOverflow"},
                ].map(element => {
                  return(
                    li({class: "header-content-nav-item"}, 
                      a({ class: "header-content-nav-item-link", target: "_blank", href: element.href }, element.content)
                    )
                  )
                })
              )
            )
          )
        )
      )
    )
  )
}
