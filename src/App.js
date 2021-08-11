import React from "react";

import Favorites from "./components/Favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Home from "./components/Home/Home";
import About from "./components/About/About";


function App() {
  return (
      <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/about" component={About} />        
      </React.Fragment>
  );
}

export default App;
