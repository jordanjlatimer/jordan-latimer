import { article, h3, h4, img, li, p, ul } from "slam-js"

const Card = (props: {imgsrc: string, header: string, description: string, status: string, tech: string, source: string}) => {
  return (
    article({class: "card"},
      img({src: props.imgsrc}),
      h3(props.header),
      p(props.description),
      h4("Info"),
      ul(
        li("Status: " + status),
        li("Main Technology: " + props.tech),
        li("Source: " + props.source)
      )
    )
  )
}

export { Card }