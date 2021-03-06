import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Content from "./components/content";

import 'bootstrap/dist/css/bootstrap.min.css';

function PreGame() {
    return (
        <div className="All">
            <div className="App">
                <Router>
                    <div className="content">
                            <Route component={Content} />
                            <Switch>
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                            </Switch>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default PreGame;
