import type {
  TService,
} from "../types";

import {
  web,
  reactjs,
  bootstrap,
  jQuery,
  javascript,

  css,
  tailwind,
  git,
} from "../assets";



const services: TService[] = [
  {
    title: "HTML",
    icon: web,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "React.js",
    icon: reactjs,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "Jquery",
    icon: jQuery,
  },
];



export { services};
