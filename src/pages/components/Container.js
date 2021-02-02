import { div } from "slam-js";

export function Container({collection, content}){
  return (
    div({class: (collection ? "collection" : "container")}, ...content)
  )
}