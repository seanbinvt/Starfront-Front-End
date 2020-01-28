import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

function Login() {
    return (
        <div className="All">
            <div className="App">
                <header className="App-header">
                        <tbody className={"login"}>
                            <tr>
                                <th color={"White"}>Email:</th>
                                <td><input type={"text"}/></td>
                            </tr>
                            <tr>
                                <th>Password:</th>
                                <td><input type={"password"}/></td>
                            </tr>
                            <tr><th></th>
                                <th><Button type="button" className="btnF btn-primary btn-lg btn-block" href={"/empire"} variant="primary" >SUBMIT</Button></th></tr>

                        </tbody>
                </header>
            </div>
        </div>
    );
}

export default Login;
