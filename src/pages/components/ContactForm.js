import { button, div, form, input, label, option, p, select, textarea } from "slam-js";
import { Container } from "./Container";

export function ContactForm(){
  return(
    Container({content: [
      p({class: "contact-instructions"}, "Please submit your information and reason for contacting me. I will usually get back to you within 48 hours."),
      form({class: "contact-form", name: "contact", method: "POST", "data-netlify": true, "netlify-honeypot": "bot-field", "data-netlify-recaptcha": "true"},
        div({class: "contact-form-control"},
          label({class: "contact-form-control-label", for: "reason"}, 
            p({class: "contact-form-control-label-text" }, "Reason:")
          ),
          select({class: "contact-form-control-select", required: true, name: "reason", id: "reason"},
            option({value: "", selected: true}, "Select a Reason..."),
            option("Question"),
            option("Work Offer"),
            option("Website or Project Bug")
          )
        ),
        div({class: "contact-form-control"},
          label({class: "contact-form-control-label", for: "name"}, 
            p({class: "contact-form-control-label-text" }, "Name:")
          ),
          input({class: "contact-form-control-input", name: "name", type: "text", required: true, id: "name"}) 
        ),
        div({class: "contact-form-control"},
          label({class: "contact-form-control-label", for: "email"}, 
            p({class: "contact-form-control-label-text" }, "Email:")
          ),
          input({class: "contact-form-control-input", name: "email", type: "email", required: true, id: "email"})
        ),
        div({class: "contact-form-control"},
          label({class: "contact-form-control-label", for: "details"}, 
            p({class: "contact-form-control-label-text" }, "Details:")
          ),
          textarea({class: "contact-form-control-textarea", name: "details", placeholder: "Details...", required: true, id: "details"})
        ),
        div({style: {display: "none"}},
          label(
            "Don't fill this out if you're a human: ", 
            input({name: "bot-field"})
          )
        ),
        div({class: "contact-form-captcha", "data-netlify-recaptcha": "true"}),
        button({class: "contact-form-submit", type: "submit"}, "Submit")
      )
    ]})
  )
}