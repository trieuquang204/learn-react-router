import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang chu",
    to: "/",
    exact: true,
  },
  {
    name: "Gioi thieu",
    to: "/about",
    exact: false,
  },
  {
    name: "Lien he",
    to: "/contact",
    exact: false,
  },
  {
    name: "San pham",
    to: "/products",
    exact: false,
  },
];

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
  const showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            label={menu.name}
            to={menu.to}
            key={index}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">{showMenus(menus)}</ul>
      </div>
    </nav>
  );
}

export default Menu;
