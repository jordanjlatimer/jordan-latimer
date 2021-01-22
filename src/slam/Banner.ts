import { div, h1, img, p, section } from "slam-js"

const Banner = () => {
  return (
    section({class: "banner"},
      div(
        h1("Jordan Latimer"),
        p("Full Stack Software Developer")
      ),
      div(
        img({src: "assets/jordan.png", alt: "A photo of Jordan Latimer"})
      )
    )
  )
}

export { Banner }