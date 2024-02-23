import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notfound/NotFound";
import Services from "./pages/service/Service";
// import Pricing from "./pages/pricing/Pricing";
import Pricing from "./pages/pricing/demoPrice";
import Team from "./pages/team/Team";
import Works from "./pages/working/Works";
import Sessions from "./pages/sessions/Sessions";

import AboutCard from "./components/aboutbox/AboutCard";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/works" element={<Works />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/card" element={<AboutCard />} />
      </Routes>
    </div>
  );
};

export default App;
