import { button, details, div, form, input, label, option, p, select, textarea } from "slam-js";
import { Container } from "./Container";

export function ContactForm(){
  return(
    Container({content: [
      p({class: "contact"}, "Please submit your information and reason for contacting me. I will usually get back to you within 48 hours."),
      form({class: "contact-form", name: "contact", method: "POST", "data-netlify": true},
        div(
          label({for: "reason"}, "Reason:"),
          select({required: true, name: "reason", id: "reason"},
            option({value: "", selected: true}, "Select a Reason..."),
            option("Question"),
            option("Work Offer"),
            option("Website or Project Bug")
          )
        ),
        div(
          label({for: "name"}, "Name:"),
          input({name: "name", type: "text", required: true, id: "name"})
        ),
        div(
          label({for: "email"}, "Email:"),
          input({name: "email", type: "email", required: true, id: "email"})
        ),
        div(
          label({for: "details"}, "Details:"),
          textarea({name: "details", placeholder: "Details...", required: true, id: "details"})
        ),
        button({type: "submit"}, "Submit")
      )
    ]})
  )
}