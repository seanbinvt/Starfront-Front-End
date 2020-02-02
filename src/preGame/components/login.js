import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import axios from "axios";
import api from "../../api";
import {Redirect} from "react-router";
import {Toast} from "react-bootstrap";
import Cookies from 'js-cookie';

const logPath = "auth/login";

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
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username);
    console.log(password);
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
                api.baseUrl + logPath,
                {username, password},
                {headers: {'Content-Type': 'application/json'}}
            );
            Cookies.set('jwt', response.data.access_token, {expires: Date.now() + 1});
            console.log(Cookies.get('jwt'));
        } catch (err) {
            // If error (user exists or other) then show message.
            console.log(err);
            showToast("Your login credentials were invalid, please retry.")
        }
    }
}

function Login() {
    if(Cookies.get('jwt')) {
        return ( <Redirect to={"/empire"}/> )
    } else {
        return (
                <tbody className={"login"}>
                    <tr>
                        <th color={"White"}>Username:</th>
                        <td><input type={"text"} id={"username"}/></td>
                    </tr>
                    <tr>
                        <th>Password:</th>
                        <td><input type={"password"} id={"password"}/></td>
                    </tr>
                    <tr><th></th>
                        <th><Button type="button" className="btnF btn-primary btn-lg btn-block" onClick={post} href="/empire" variant="primary">SUBMIT</Button></th></tr>
                </tbody>
    );
    }
}

export default Login;
