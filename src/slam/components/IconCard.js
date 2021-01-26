import { div, p } from "slam-js";

export function IconCard(icon, name){
  return(
    div({class: "icon-card"}, 
      icon,
      p(name)
    )
  )
}