const projects = [
  {
    id: 0,
    title: "Jungle Rails",
    description:
      "A feature-rich e-commerce platform built with Ruby on Rails. Users can browse products, manage their carts, and complete orders. Admins can manage inventory and view sales analytics.",
    stack: [
      { id: 0, name: "Ruby on Rails" },
      { id: 1, name: "PostgreSQL" },
      { id: 2, name: "SCSS" },
      { id: 3, name: "Stripe" },
      { id: 4, name: "RSpec" },
    ],
    github: "https://github.com/MOGARRR/jungle-rails",
    image: "/assets/jungle-preview.png", // replace with your image
  },
  {
    id: 1,
    title: "Decision Maker",
    description:
      "Full-stack polling app for group decision-making. Users can create polls, vote using drag-and-drop rankings, and receive updates via email.",
    stack: [
      { id: 0, name: "Node.js" },
      { id: 1, name: "Express" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "EJS" },
      { id: 4, name: "Mailgun" },
    ],
    github: "https://github.com/Amga20d/decision-maker",
    image: "/assets/decision-maker.png",
  },
  {
    id: 2,
    title: "LightBnB",
    description:
      "Multi-page Airbnb clone with custom PostgreSQL database. Supports search filtering, user listings, reservations, and more.",
    stack: [
      { id: 0, name: "Node.js" },
      { id: 1, name: "Express" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "HTML" },
      { id: 4, name: "CSS" },
      "Node.js", "Express", "PostgreSQL", "HTML", "CSS"],
    github: "https://github.com/MOGARRR/LightBnB",
    image: "/assets/lightbnb.png",
  },
];

export default projects;