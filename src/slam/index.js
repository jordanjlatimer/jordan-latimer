import { body, div, h3, html, main, p } from "slam-js";
import { Banner, Bash, Block, Card, IconCard, Collection, CPP, CSS3, Footer, Git, Github, Head, Header, Html5, Javascript, MSSQL, NodeJS, NPM, PostgreSQL, Python, React, Sass, Typescript, Webpack, Container, AboutText, ContactForm } from "./components";
import { cardData } from "./data/_cardData.js";

const Cards = cardData.map(dataset => Card(dataset));
const Skills = [
  IconCard(Bash(), "Bash"),
  IconCard(CPP(), "C++"),
  IconCard(CSS3(), "CSS3"),
  IconCard(Git(), "Git"),
  IconCard(Github(), "Github"),
  IconCard(Html5(), "HTML5"),
  IconCard(Javascript(), "Javascript"),
  IconCard(MSSQL(), "Microsoft SQL Server"),
  IconCard(NodeJS(), "Node.js"),
  IconCard(NPM(), "NPM"),
  IconCard(PostgreSQL(), "PostgreSQL"),
  IconCard(Python(), "Python"),
  IconCard(React(), "React"),
  IconCard(Sass(), "Sass"),
  IconCard(Typescript(), "Typescript"),
  IconCard(Webpack(), "Webpack")
]

const File = () => {
  return (
    html({ lang: "en-US" },
      Head(),
      body(
        Header(),
        main(
          Banner(),
          div({ class: "main-content" },
            Block({ title: "My Work", content: Collection(...Cards), }),
            Block({ title: "Skills", reversed: true, content: Collection(...Skills), }),
            Block({ title: "About Me", content: AboutText()}),
            Block({ title: "Contact Me", reversed: true, content: ContactForm()})
          )
        ),
        Footer()
      )
    )
  )
};

export default File;
