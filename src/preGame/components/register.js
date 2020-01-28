import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    return (
        <div className="All">
            <div className="App">
                <header className="App-header">
                    <tbody>
                    <tr>
                        <th>Email:</th>
                        <th><input type={"text"}/></th>
                    </tr>
                    <tr>
                        <th>Password:</th>
                        <th><input type={"password"}/></th>
                    </tr>
                    <tr>
                        <th>Confirm Password:</th>
                        <th><input type={"password"}/></th>
                    </tr>
                    </tbody>
                </header>
            </div>
        </div>
    );
}

export default Register;
