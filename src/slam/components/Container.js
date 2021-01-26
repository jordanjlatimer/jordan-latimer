import { div } from "slam-js";

export function Container(...content){
  return (
    div({class: "container"}, ...content)
  )
}