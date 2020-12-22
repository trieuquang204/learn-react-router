import React, { component } from "react";
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";


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

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <MenuLink label="Trang chu" to="/" activeOnlyWhenExact={true} />
          <MenuLink label="Gioi thieu" to="/about" />
          <MenuLink label="Lien he" to="/contact" />
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
