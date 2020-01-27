import React from 'react';
import './App.css';
import Header from "./components/header";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="All">
        <div className="App">
          <header className="App-header">
              <Header/>
          </header>
        </div>
      </div>
  );
}

export default App;
