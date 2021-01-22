import { div, h2, section } from "slam-js"

const Block = (props: {reversed?: boolean, content?: string}) => {
  return (
    section({class: "block" + (props.reversed ? " reversed" : "")},
      div({class: "block-title"},
        h2("My Work")
      ),
      div({class: "block-content"},
        ...props.content
      )
    )
  )
}

export { Block }