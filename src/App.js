import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react'

import './App.css';
import Nav from './components/Nav';
import Home from "./pages/Home"
import Allproperties from './pages/Allproperties'
import Buy from './pages/Buy'
import Rent from './pages/Rent'
import Contact from './pages/Contact'
import Registration from './pages/Registration'
import Login from "./pages/Login"
import Survey from "./pages/Survey";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>

   <Routes>
   < Route  path = "/" element= {<Home/>} > </Route>
   < Route  exact path = "/allproperties" element= {<Allproperties/>} > </Route>
   < Route  exact path = "/buy" element= {<Buy/>} > </Route>
   < Route  exact path = "/rent" element= {<Rent/>} > </Route>
   < Route  exact path = "/contact" element= {<Contact/>} > </Route>
   < Route  exact path = "/registration" element= {<Registration/>} > </Route>
   < Route  exact path = "/login" element= {<Login/>} > </Route>
   < Route  exact path = "/survey" element= {<Survey/>} > </Route>

   </Routes>


   <Footer/>


    </div>
    </Router>
  );
}

export default App;
