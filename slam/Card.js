import { article, h3, h4, img, li, p, ul } from "slam-js";

const Card = ({ imgsrc, header, description, status, tech, source }) => {
  return article(
    { class: "card" },
    img({ src: imgsrc }),
    h3(header),
    p(description),
    h4("Info"),
    ul(li("Status: " + status), li("Main Technology: " + tech), li("Source: " + source))
  );
};

export { Card };
