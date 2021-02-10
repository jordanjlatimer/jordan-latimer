import { body, div, footer, head, html, link, main, meta, p, title } from "slam-js";
import { Banner, Block, Card, Header, AboutText, ContactForm, Container } from "./components";
import { cardData } from "./data/_cardData.js";
import { skills } from "./data/_skills";

const Cards = cardData.map(dataset => Card(dataset));

export default function Document(){
  return (
    html({ lang: "en-US" },
      head(
        title("Jordan Latimer"),
        meta({ name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1" }),
        meta({ name: "google-site-verification", content: "cCsIBsTtljU7AZFRllSFzkk5ggIH6AILo7PY15FDl9Q" }),
        link({ rel: "icon", href: "assets/favicon.ico" })
      ),
      body(
        Header(),
        main(
          Banner(),
          div({ class: "main-content" },
            Block({ title: "My Work", link: "projects", content: Container({collection: true, content: Cards}), }),
            Block({ title: "Skills", link: "skills", reversed: true, content: Container({collection: true, content: skills}), }),
            Block({ title: "About Me", link: "about", content: AboutText()}),
            Block({ title: "Contact Me", link: "contact", reversed: true, content: ContactForm()})
          )
        ),
        footer(
          p("&#169; 2021 Jordan Latimer")
        )
      )
    )
  )
};
