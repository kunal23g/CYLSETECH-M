import React from "react"
import Navbar from "./components/Navbar."
import Landing from "./components/Landing"
import Marquee from "./components/Marquee"
import About from "./components/About"
import Eyes from "./components/Eyes"
import Featured from "./components/Featured"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import LocomotiveScroll from 'locomotive-scroll';
import Ending from "./components/Ending"



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (


    <div className="overflow-hidden  min-h-screen bg-zinc-900 text-white">
      {/* <Navbar/> */}
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      {/* <Footer/> */}
      {/* <ContactUs/> */}
      {/* <Ending/> */}
      
    </div>
  )
}

export default App
