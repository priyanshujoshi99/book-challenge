import React from "react";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from "./component/Search";
import Cart from "./component/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;