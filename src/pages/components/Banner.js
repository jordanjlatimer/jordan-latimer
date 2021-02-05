import { div, h1, img, p, section } from "slam-js";

export function Banner() {
  return (
    section({ class: "banner" },
      div({class: "banner-text"},
        h1({class: "banner-text-title" }, "Jordan Latimer"), 
        p({class: "banner-text-description" }, "Full Stack Software Developer")
      ),
      div({class: "banner-visuals"},
        img({ class: "banner-visuals-img", src: "assets/jordan.png", alt: "A photo of Jordan Latimer" })
      )
    )
  )
}
