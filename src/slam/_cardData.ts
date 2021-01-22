import { a } from "slam-js"

const cardData = [
  {
    imgsrc: "assets/chipmunk.png",
    header: "Chipmunk",
    description: "A personal budgeting application.",
    status: "In Progress",
    tech: "Typescript",
    source: "Personal Project"
  },
  {
    imgsrc: "assets/lending-tree.png",
    header: "LendingTree Clone",
    description: "A clone of a " + a({href: "https://www.lendingtree.com/forms/mortgage/dogwood/purch_nossn"}, "LendingTree Form"),
    status: "Finished",
    tech: "Javascript",
    source: "Freelance Work"
  },
  {
    imgsrc: "assets/simp-ui.png",
    header: "Simp-UI",
    description: "A simple React UI Library for use in my projects and work.",
    status: "In Progress",
    tech: "Typescript",
    source: "Personal Project"
  },
  {
    imgsrc: "assets/dental-mockup.png",
    header: "Dental Inventory Application Mockup",
    description: "A mockup that I did for a dental inventory application",
    status: "Finished",
    tech: "Javascript",
    source: "Freelance Work"
  },
  {
    imgsrc: "assets/portfolio-website.png",
    header: "Portfolio Website",
    description: "The website you're currently viewing.",
    status: "Finished",
    tech: "HTML",
    source: "Personal Project"
  },
  {
    imgsrc: "assets/slam-js.png",
    header: "Slam.js",
    description: "A Javascript library for generating static HTML on the server side.",
    status: "Finished",
    tech: "Typescript",
    source: "Personal Project"
  },
]

export {cardData}