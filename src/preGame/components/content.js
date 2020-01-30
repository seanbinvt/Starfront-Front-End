import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

function Content() {
    return (
        <div className="landingPage">
            <div className={"title"}>Welcome to Startfront!</div>
            <table>
                <tbody>
                    <tr>
                        <th><Button type="button" className="btnF btn-primary btn-lg btn-block" href={"/login"} variant="primary" >Login</Button></th>
                        <th><Button type="button" className="btnF btn-primary btn-lg btn-block" href={"/register"} variant="primary">Register</Button></th>
                        <th><Button type="button" className="btnF btn-primary btn-lg btn-block" href={"/empire"} variant="primary">To Game</Button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Content
