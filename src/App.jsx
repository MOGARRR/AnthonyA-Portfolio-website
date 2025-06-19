import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from "./components/About";
import ProjectsCardList from './components/ProjectCardList';
import Skills from './components/Skills';
import './App.css'



function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <ProjectsCardList/>
      <Footer/>
    </div>   
  )
}

export default App
