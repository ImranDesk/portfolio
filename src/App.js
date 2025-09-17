import React from "react";
import "./styles/global.scss";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div style={{ background: "#0f1419", minHeight: "100vh" }}>
      <Navbar />
      <main className="container">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
