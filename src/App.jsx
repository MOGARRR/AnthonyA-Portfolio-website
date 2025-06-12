import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import './App.css'



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
