import { path, svg } from "slam-js"

const AngleIcon = (props?: {pointRight: boolean}) => {
  return(
    svg({class: "carousel-button" + (props.pointRight ? " right" : ""), viewBox: "0 0 14 26", width: "42", height: "78px"},
      path({d: "M12 2 L2 13 L12 24", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round"})
    )
  )
}

export {AngleIcon}