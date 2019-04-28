import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/home/home";
import Nav from "./components/nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
