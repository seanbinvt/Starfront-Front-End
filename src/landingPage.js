import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import PreGame from "./preGame/preGame"
import App from "./App"

import 'bootstrap/dist/css/bootstrap.min.css';

function landingPage() {
    return (
        <div className="All">
            <div className="App">
                <Router>
                    <div className="content">
                        <Switch>
                            <Route path="(/|/login|/register)" exact component={PreGame} />
                            <Route path="/" component={App}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default landingPage;
