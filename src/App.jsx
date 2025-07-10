import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsCardList from "./components/ProjectCardList";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import DotGrid from "./components/DotGrid";
import "./App.css";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DotGrid
        className="absolute inset-0 -z-10"
        spacing={28}
        dotSize={4}
        color="#444"
      />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
         <Header />
         <Hero />
         <Contacts />
         <About />
         <Skills />
         <ProjectsCardList />
         <ContactForm />
         <Footer />
      </main>
    </div>
  )
}

export default App