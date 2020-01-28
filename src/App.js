import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from "./header";
import Empire from "./components/empire/empire";

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
      <div className="All">
        <div className="App">
          <header className="App-header">
              <Header/>
              <Router>
                  <div className="content">
                      <Switch>
                      <Route path="/empire" component={Empire} />
                      </Switch>
                  </div>
              </Router>
          </header>
        </div>
      </div>
  );
}

export default App;
