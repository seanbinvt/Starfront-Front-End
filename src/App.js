import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import Header from "./header";
import Empire from "./components/empire/empire";

import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    if(!Cookies.get("jwt")) {
        return <Redirect to={"/login"}/>;
    } else {
        return (
            <div className="All">
                <header className="App-header">
                    <Header/>
                        <Router>
                            {Routes}
                        </Router>
                </header>
            </div>
        );
    }
}

const Routes = () => {
    return(
        <div className="content">
            <Switch>
                <Route path="/empire" component={Empire} />
            </Switch>
        </div>
    )
}

export default App;

