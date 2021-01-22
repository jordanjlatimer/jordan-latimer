import { body, div, html, main } from "slam-js";
import * as fs from "fs";
import { Header } from "./Header.js";
import { Head } from "./Head.js";
import { Banner } from "./Banner.js";
import { Block } from "./Block.js";
import { Card } from "./Card.js";
import { cardData } from "./_cardData.js";
import { Collection } from "./Collection.js";
import { Footer } from "./Footer.js";
import { Carousel } from "./Carousel.js";

const Cards = cardData.map(dataset => Card(dataset));
const Skills = ["0", "1", "2", "3", "4", "5"].map(value => div({ class: "carousel-item" }, value));

const index = () => {
  return html(
    { lang: "en-US" },
    Head(),
    body(
      Header(),
      main(
        Banner(),
        div(
          { class: "main-content" },
          Block({
            title: "My Work",
            content: Collection(...Cards),
          }),
          Block({
            title: "Skills",
            reversed: true,
            content: Carousel(...Skills),
          })
        )
      ),
      Footer()
    )
  );
};

fs.writeFileSync("./src/index.html", index());
