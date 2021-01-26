import { button, details, div, form, input, label, option, p, select, textarea } from "slam-js";
import { Container } from "./Container";

export function ContactForm(){
  return(
    Container(
      p({class: "contact"}, "Please submit your information and reason for contacting me. I will usually get back to you within 48 hours."),
      form({class: "contact-form", name: "contact", method: "POST", "data-netlify": true},
        div(
          label({for: "reason"}, "Reason:"),
          select({required: true, name: "reason"},
            option("Question"),
            option("Work Offer"),
            option("Website or Project Bug")
          )
        ),
        div(
          label({for: "name"}, "Name:"),
          input({name: "name", type: "text", required: true})
        ),
        div(
          label({for: "email"}, "Email:"),
          input({name: "email", type: "email", required: true})
        ),
        div(
          label({for: "details"}, "Details:"),
          textarea({name: "details", placeholder: "Details...", required: true})
        ),
        button({type: "submit"}, "Submit")
      )
    )
  )
}