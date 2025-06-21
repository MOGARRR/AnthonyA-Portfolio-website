import photoLabsHome from '../photos/photo-labs-home.png'
import jungleHome from '../photos/Jungle-rails-home.png'
import decisionHome from '../photos/decision-maker-home.png'
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
    image: jungleHome, // replace with your image
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
    image: decisionHome,
  },
  {
    id: 2,
    title: "PhotoLabs",
    description:
      " Front-end React application built to deliver an engaging user experience through interactive design. Users can browse a gallery of curated images, toggle favorites, and navigate cleanly through a responsive, visually balanced layout. The app emphasizes component-based design and scalable architecture.",
    stack: [
      { id: 0, name: "React" },
      { id: 1, name: "Node.js" },
      { id: 2, name: "HTML" },
      { id: 3, name: "CSS" },
      { id: 4, name: "SCSS" },
    ],
    github: "github.com/MOGARRR/PhotoLabs",
    image: photoLabsHome,
  },
  // {
  //   id: 3,
  //   title: "LightBnB",
  //   description:
  //     "Multi-page Airbnb clone with custom PostgreSQL database. Supports search filtering, user listings, reservations, and more.",
  //   stack: [
  //     { id: 0, name: "Node.js" },
  //     { id: 1, name: "Express" },
  //     { id: 2, name: "PostgreSQL" },
  //     { id: 3, name: "HTML" },
  //     { id: 4, name: "CSS" },
  //   ],
  //   github: "https://github.com/MOGARRR/LightBnB",
  //   image: "https://ceblog.s3.amazonaws.com/wp-content/uploads/2018/08/28192739/Homepage-Design-Featured-Image-1024x597.gif",
  // },
];

export default projects;