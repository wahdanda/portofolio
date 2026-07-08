import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from './components/Skill';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
    </>
  );
}

export default App;
