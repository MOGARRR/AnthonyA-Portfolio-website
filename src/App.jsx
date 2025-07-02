import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from "./components/About";
import ProjectsCardList from './components/ProjectCardList';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import './App.css'



function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <Contacts/>
      <About/>
      <Skills/>
      <ProjectsCardList/>
      <ContactForm/>
      <Footer/>
    </div>   
  )
}

export default App
