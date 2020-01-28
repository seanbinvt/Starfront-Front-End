import React from "react";
import Button from 'react-bootstrap/Button';

import "./headerAccount.css";

// Make database calls and set vars.
var accountID = 12345;
var messagesUnread = 123;
var credits = 123456789;
var boardUnread = 1234;

var currentRank = 0;

const HeaderAccount = props => (
    <div>
    <table align="left" className="extras">
        <thead>
            <tr>
                <td>Rank ({currentRank}) |</td>
                <td>Help |</td>
                <td>Rules/ToS |</td>
                <td>Contact Us</td>
            </tr>
        </thead>
    </table>

    <table align="right" className="headerAccount">
        <thead>
           <tr>
                <th><Button type="button" className="btnh btn-primary btn-sm btn-block" href={"/account"} variant="primary" >Account<br></br>{accountID}</Button></th>
                <th><Button type="button" className="btnh btn-primary btn-sm btn-block" href={"/messages"} variant="primary">Messages<br></br>{messagesUnread}</Button></th>
            </tr>
            <tr>
                <td><Button type="button" className="btnh btn-primary btn-sm btn-block" href={"/credits"} variant="primary">Credits<br></br>{credits}</Button></td>
                <td><Button type="button" className="btnh btn-primary btn-sm btn-block" href={"/board"} variant="primary">Board<br></br>{boardUnread}</Button></td>
            </tr>
        </thead>
    </table>
    </div>
);

export default HeaderAccount;
