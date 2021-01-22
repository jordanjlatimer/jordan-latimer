import { div } from "slam-js"
import { AngleIcon } from "./AngleIcon"

const Carousel = (...items: string[]) => {
  return (
    div({class: "carousel"},
      AngleIcon(),
      div({class: "carousel-content"},
        ...items
      ),
      AngleIcon({pointRight: true})
    )
  )
}

export {Carousel}