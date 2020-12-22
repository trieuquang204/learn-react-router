import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import routes from './routes';



function App() {
  const showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route path={route.path} exact={route.exact} component={route.main} key={index} />
        )
      })
    }

    return result;
  }

  return (
    <Router>
      <div classNameName="App">
        <Menu/>
        {/* Noi dung  */}
        <Switch>
          {showContentMenus(routes)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
