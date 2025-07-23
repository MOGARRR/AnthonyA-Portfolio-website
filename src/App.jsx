import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsCardList from "./components/ProjectCardList";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import DotGrid from "./components/DotGrid";
import MobileHero from "./components/MobileHero";
import MobileHeader from "./components/MobileHeader";
import MobileAbout from "./components/MobileAbout";
import MobileSkills from "./components/MobileSkills";

function App() {
  const [mobile, setMobile] = useState(false);
  const isUserMobile = () =>
    window.innerWidth < 768 ? setMobile(true) : setMobile(false);

  useEffect(() => {
    isUserMobile();
  }, [window.innerWidth]);

  return (
    <>
      {!mobile && (
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
      )}

      {mobile && (
        <main>
        <MobileHeader/>
        <MobileHero/>
        <MobileAbout/>
        <MobileSkills/>
        <ProjectsCardList mobile={mobile}/>
        <ContactForm/>

        </main>
        

      )}
    </>
  );
}

export default App;
