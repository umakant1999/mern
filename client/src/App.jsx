import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";

import User from "./pages/User";
import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./Components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import Portfolio from "./pages/Portfolio";
import Footer from "./Components/Footer";
import Port from "./pages/Port";
const App = () => {
  return (
    <Router>
      <div>
     

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
             <Route path="/todo" element={<Todo/>}/> 
                    <Route path="/portfolio" element={<Portfolio/>}/> 
                        <Route path="/port" element={<Port/>}/> 
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
