import photoLabsHome from '../photos/photo-labs-home.png'
import jungleHome from '../photos/Jungle-rails-home.png'
import decisionHome from '../photos/decision-maker-home.png'
import KiloBoyHome from '../photos/KiloBoy-Art.png'
const projects = [
  {
    id: 0,
    title: "KiloBoy Artwork - (Under Development)",
    description:
      "A full-stack web application built for Toronto-based artist KiloBoy, combining a dynamic gallery with a custom e-commerce experience.",
    stack: [
      { id: 0, name: "NextJs" },
      { id: 1, name: "TypeScript" },
      { id: 2, name: "SupaBase" },
      { id: 3, name: "Stripe" },
      { id: 4, name: "Shippo" },
      { id: 5, name: "Resend" },
    ],
    github: "https://github.com/MOGARRR/miles",
    image: 'https://cdn.discordapp.com/attachments/1298292949154660416/1466857993953087775/homepageGIF.gif?ex=698239f6&is=6980e876&hm=6791650f4ec4a64161c2795d661b9e2406a63065a40a330e8b9f2910baccd3a3&',
  },
  {
    id: 1,
    title: "Jungle Rails",
    description:
      "A feature-rich e-commerce platform built with Ruby on Rails. Users can browse products, manage their carts, and complete orders. Admins can manage inventory, and view sales analytics.",
    stack: [
      { id: 0, name: "Ruby on Rails" },
      { id: 1, name: "PostgreSQL" },
      { id: 2, name: "SCSS" },
      { id: 3, name: "Stripe" },
      { id: 4, name: "RSpec" },
    ],
    github: "https://github.com/MOGARRR/jungle-rails",
    image: jungleHome,
  },
  {
    id: 2,
    title: "Decision Maker",
    description:
      "Full-stack polling app for helping make group decisions. Users can create and share polls, vote using drag-and-drop rankings, and receive updates on poll standings via email .",
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
    id: 3,
    title: "PhotoLabs",
    description:
      " Front-end React application built for users to share experiences through interactive design. Users can browse a gallery of curated images, toggle favorites, filter photos by topics, or use dark mode to curate thier personal gallery. The app emphasizes component-based design and scalable architecture.",
    stack: [
      { id: 0, name: "React" },
      { id: 1, name: "Node.js" },
      { id: 2, name: "HTML" },
      { id: 3, name: "CSS" },
      { id: 4, name: "SCSS" },
    ],
    github: "https://github.com/MOGARRR/PhotoLabs",
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