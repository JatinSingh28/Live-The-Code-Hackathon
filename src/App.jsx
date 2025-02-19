/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blob from "./components/blob/blob";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Events from "./components/about/Events";
import Rules from "./components/participation_rules/Rules";
import Prize from "./components/prize_section/Prize";
import Sponsors from "./components/sponsors/Sponsors";
import Teams from "./components/teams/Teams";
import Themes from "./components/themes/Themes";
import Offerings from "./components/offerings/Offerings";
import Contact from "./components/contact/Contact";
import Ask from "./components/ask/Ask";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import Participation from "./pages/Participation";
import Prizes from "./pages/Prizes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Theme />} />
          <Route path="/participation" element={<Participation />} />
          <Route path="/prizes" element={<Prizes />} />
        </Routes>
      </BrowserRouter>
    </div>
    // <div>
    //   <Blob />
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <Events />
    //   <Timeline />
    //   <Themes />
    //   <Rules />
    //   <Prize />
    //   <Sponsors />
    //   <Teams />
    //   {/* <Offerings/> */}
    //   <Ask />
    //   <Contact />
    // </div>
  );
}

export default App;
