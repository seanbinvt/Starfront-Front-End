import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="All">
            <div className="App">
                <header className="App-header">
                    <Header/>
                    <Router>
                        <div className="content">
                            <Route path="/empire" component={Empire} />
                        </div>
                    </Router>
                </header>
            </div>
        </div>
    );
}

export default App;
