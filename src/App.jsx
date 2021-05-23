import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import "./components/intro/Intro.scss";
import './components/topbar/Topbar.scss'
import "./components/portfolio/Portfolio.scss";
import "./components/works/Works.scss";
import  "./components/testimonial/Testimonial.scss";
import  "./components/contact/Contact.scss";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import "./components/menu/Menu.scss"


function App() {
  const [menuOpen,setMenuOpen]= useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu Open={menuOpen} setOpen={setMenuOpen}/>
    <div className="sections">
     <Intro/>
     <Works/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>

    </div>

    </div>
  )
}

export default App;
