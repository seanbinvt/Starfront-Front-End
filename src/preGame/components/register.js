import React, {Component} from 'react';
import axios from 'axios';

import database from '../../api'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import {register} from "../../serviceWorker";
import {Redirect} from "react-router";
import {Toast} from "react-bootstrap";

const regPath = "auth/register"

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
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    console.log(username);

    if (!username) {
        showToast("Your username cannot be null, please try again.");
        return;
    } else if (!password) {
        showToast("Your password cannot be null, please try again.");
        return;
    } else if (password !== confirmPass) {
        showToast("Your password and password confirmation field must match, please try again.");
        return;
    } else {
        try {
            // Make post request to register and direct to login after registration.
            const response = await axios.post(
                database.baseUrl + regPath,
                {username, password},
                {json: true}
            );
            return <Redirect to={'/login'}/>
            return;
        } catch (err) {
            // If error (user exists or other) then show message.
            showToast("There was an error with the registration. Your entered username may be taken by another player.")
            console.log(err);
        }
    }
}

function Register() {
    return (
        <div className="All">
            <div className="App">
                <div className="App-header">
                    <table>
                        <tbody className={"register"}>
                        <tr>
                            <th>Username:</th>
                            <td><input type={"text"} id="username"/></td>
                        </tr>
                        <tr>
                            <th>Password:</th>
                            <td><input type={"password"} id="password"/></td>
                        </tr>
                        <tr>
                            <th>Confirm Password:</th>
                            <td><input type={"password"} id="confirmPassword"/></td>
                        </tr>
                        <tr><th></th>
                            <th><Button type="button" className="btnF btn-primary btn-lg btn-block" onClick={post} variant="primary" >SUBMIT</Button></th></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Register;
