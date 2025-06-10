import { useState } from 'react'
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/ProjectCardList';
import Skills from './components/Skills';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import './App.css'
import ProjectsCardList from './components/ProjectCardList';



function App() {

  return (
    <div>
      <Hero/>
      <Header/>
      <MainContent/>
      {/* <Footer/> */}
    </div>   
  )
}

export default App
