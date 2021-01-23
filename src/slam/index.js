import { body, div, html, main } from "slam-js";
import { Banner, Block, Card, Carousel, Collection, Footer, Head, Header } from "./components";
import { cardData } from "./data/_cardData.js";

const Cards = cardData.map(dataset => Card(dataset));
const Skills = ["0", "1", "2", "3", "4", "5"].map(value => div({ class: "carousel-item" }, value));

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
            Block({ title: "Skills", reversed: true, content: Carousel(...Skills), })
          )
        ),
        Footer()
      )
    )
  )
};

export default File;
