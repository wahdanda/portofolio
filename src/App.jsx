import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from"./components/Project";
import Footer from './components/Footer';


function App() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project/>
      <Footer/>
    </>
  );
}

export default App;
