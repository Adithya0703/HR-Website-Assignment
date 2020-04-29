import React from 'react';
import Nav from './Components/Navbar';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Components/Home"
import Opp from "./Components/Oppurtunities"
import Contact from "./Components/Contact"
import Admin from "./Components/Admin"

function App() {
  return (
    <div className="backgroundCover">
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/oppurtunities" component={Opp} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/admin" component={Admin} />
      </BrowserRouter>
    </div>

  );
}

export default App;
