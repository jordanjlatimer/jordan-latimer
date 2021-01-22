import { body, div, html, main } from "slam-js";
import * as fs from "fs";
import { Header } from "./Header";
import { Head } from "./Head";
import { Banner } from "./Banner";
import { Block } from "./Block";
import { Card } from "./Card";
import { cardData } from "./_cardData";
import { Collection } from "./Collection";

const Cards = cardData.map(dataset => Card(dataset))

const index = () => {
  return (
    html({ lang: "en-US" }, 
      Head(), 
      body(
        Header(), 
        main(
          Banner(),
          div({class: "main-content"},
            Block({
              content: Collection(...Cards)
            }),
            Block({
              reversed: true
            })
          )
        )
      )
    )
  )
};

fs.writeFileSync("./src/indextest.html", index());
