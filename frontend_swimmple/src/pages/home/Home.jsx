import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import About from "../about/About";
import Contact from "../contact/Contact";
// import NotFound from "./pages/notfound/NotFound";
import Services from "../service/Service";
// import Pricing from "../pricing/Pricing";
import Pricing from "../pricing/demoPrice";
import Team from "../team/Team";
import Works from "../working/Works";
import Sessions from "../sessions/Sessions";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/Hero/Hero";


const Home = () => {
  return (
    <div className='home-section'>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Pricing/>
    {/* <Sessions/>
    <Works/> */}
    <Team/>
    {/* <Contact/> */}
    <Footer/>
    
    </div>
  )
}

export default Home