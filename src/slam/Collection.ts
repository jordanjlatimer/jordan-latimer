import { div } from "slam-js";

const Collection = (...children: string[]) => {
  return (
    div({class: "collection"},
      ...children
    )
  )
}

export {Collection}