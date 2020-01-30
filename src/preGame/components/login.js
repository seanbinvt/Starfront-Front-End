import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
import database from "../../database";
import {Redirect} from "react-router";
import {Toast} from "react-bootstrap";

const logPath = "auth/login"

function showToast(text) {
    console.log(text);
    return(
        <Toast>
            <Toast.Header>Error!</Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}

async function post() {
    var username = document.getElementById(username);
    var password = document.getElementById(password);

    if (!username) {
        showToast("Your username cannot be null, please try again.");
        return;
    } else if (!password) {
        showToast("Your password cannot be null, please try again.");
        return;
    } else {
        try {
            // Make post request to register and direct to login after registration.
            const response = await axios.post(
                database.baseUrl + logPath,
                {username: {username}, password: {password}},
                {headers: {'Content-Type': 'application/json'}}
            );
            return <Redirect to={'/empire'}/>
            return;
        } catch {
            // If error (user exists or other) then show message.
            showToast("Your login credentials were invalid, please retry.")
            return;
        }
    }
}

function Login() {
    return (
        <div className="All">
            <div className="App">
                <header className="App-header">
                        <tbody className={"login"}>
                            <tr>
                                <th color={"White"}>Email:</th>
                                <td><input type={"text"} id={"username"}/></td>
                            </tr>
                            <tr>
                                <th>Password:</th>
                                <td><input type={"password"} id={"password"}/></td>
                            </tr>
                            <tr><th></th>
                                <th><Button type="button" className="btnF btn-primary btn-lg btn-block" onClick={post} variant="primary" >SUBMIT</Button></th></tr>

                        </tbody>
                </header>
            </div>
        </div>
    );
}

export default Login;
