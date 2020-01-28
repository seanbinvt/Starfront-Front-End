import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

function Content() {
    return (
        <header className="landingPage">
            <div className={"title"}>Welcome to Startfront!</div>
            <tr>
                <th><Button type="button" className="btnF btn-primary btn-lg btn-block" href={"/login"} variant="primary" >Login</Button></th>
                <th><Button type="button" className="btnF btn-primary btn-lg btn-block" href={"/register"} variant="primary">Register</Button></th>
                <th><Button type="button" className="btnF btn-primary btn-lg btn-block" href={"/empire"} variant="primary">To Game</Button></th>
            </tr>
        </header>
    );
}

export default Content
