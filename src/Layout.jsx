import React from 'react'
import Navbar from './components/Navbar.'
import Footer from './components/Footer'
import Marquee from './components/Marquee'
import About from './components/About'
import Landing from './components/Landing'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        
        <div className="overflow-hidden  min-h-screen bg-zinc-900 text-white">

        <Navbar/>
        <div className=''></div>
      <Outlet/>

        <Footer/>
        </div>
        
    )
}

export default Layout
