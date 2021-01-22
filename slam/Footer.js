import { a, footer, li, p, ul } from "slam-js";

const Footer = () => {
  return footer(
    p("&#169; 2020 Jordan Latimer"),
    ul(li(a({ href: "mailto:jordanjlatimer@gmail.com" }, "Email")), li(a("LinkedIn")), li(a("Github")), li(a("Dev")), li(a("StackOverflow")))
  );
};

export { Footer };
