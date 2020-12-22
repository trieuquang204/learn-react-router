import React, { component } from "react";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";



function App() {
  return (
    <Router>
      <div classNameName="App">
        <Menu/>
        {/* Noi dung  */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
