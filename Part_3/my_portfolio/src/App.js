import React from "react";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greeting />
      <AboutMe />
      <Skills />
      <Interests />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;



