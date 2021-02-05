import { h3, p } from "slam-js";
import { Container } from "./Container";

export function AboutText(){
  return(
    Container({content: [
      h3("Background"),
      p(`
        I was raised in Orem, Utah. After graduating high school I completed about 1 year at Utah Valley University before 
        transferring up to Brigham Young University - Idaho where I majored in economics and minored in finance. I graduated 
        in 2020 and now reside in Pleasant Grove, Utah.
      `),
      h3("How I Got Into Programming"),
      p(`
        During my college education, I took two software development classes in C++ and Python. In the fall of 2019
        I was hired on as an operations analyst for Avadi Laboratories, a dental lab in Pleasant Grove, Utah. There I learned 
        SQL which I used with Google Sheets to make reports that their current software didn't offer. These reports helped 
        management identify areas where costs could be reduced and processes needed to be improved.
      `),
      p(`
        My interest in programming continued to grow. I helped create a website mockup for the company and used Google Script
        to create internal forms and dashboards that tracked production errors. When certain problems and limitations of their 
        current software became apparent to me I was able to fix them by modifying the database's stored procedures.
      `),
      p(`
        Then, Covid-19 hit and I had to be put on furlough due to the work coming in from dentists decreasing by almost 80%.
        While at home I spent my time learning more programming languages and technologies, like HTML, CSS, Javascript, and
        PostgreSQL, and I improved my knowledge of Python. Eventually I found out about React and loved how quickly it allowed
        me to develop web applications.
      `),
      p(`
        After returning to work I used my newfound knowledge to make reports, dashboards, and tools that were connected to the database
        and would be able to outlast my time at Avadi. I learned and began using Node.js and Express to finally deploy these tools as an 
        application on Avadi's server.
      `),
      p(`
        It was becoming more apparent that my love for programming was sending my career in a different direction. Currently I'm
        taking time off from regular employment to freelance, develop my website, build my portfolio, and contribute to open 
        source projects.
      `)
    ]})
  )
}