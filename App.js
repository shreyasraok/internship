//import React from "react";
//import Header from "./components/Header";
//import Body from "./components/Body";
//import Footer from "./components/Footer";
//import Bootstrap from "./components/Bootstrap";
//const App = () => {
  //return (
    //<>
    //<Header />
    //<Body />
    //<Footer/>
    //<Bootstrap/>
    //</>
  //);
//};
//export default App;

import React from "react";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Pages/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App () {
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element = {<Home />} path="/" />
      <Route element = {<Contact />} path="/contact" />
      <Route element = {<About />} path="/about" />
      
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;