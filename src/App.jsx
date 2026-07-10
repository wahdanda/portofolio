import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from"./components/Project";
import Footer from './components/Footer';


function App() {
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
