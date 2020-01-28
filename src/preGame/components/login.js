import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div className="All">
            <div className="App">
                <header className="App-header">
                        <tbody>
                            <tr>
                                <th color={"White"}>Email:</th>
                                <th><input type={"text"}/></th>
                            </tr>
                            <tr>
                                <th>Password:</th>
                                <th><input type={"password"}/></th>
                            </tr>
                        </tbody>
                </header>
            </div>
        </div>
    );
}

export default Login;
