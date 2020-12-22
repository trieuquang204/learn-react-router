import React, { component } from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={active}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

function App() {
  return (
    <Router>
      <div classNameName="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <MenuLink label="Trang chu" to="/" activeOnlyWhenExact={true} />
              <MenuLink label="Gioi thieu" to="/about" />
              <MenuLink label="Lien he" to="/contact" />
            </ul>
          </div>
        </nav>
        {/* Noi dung  */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
