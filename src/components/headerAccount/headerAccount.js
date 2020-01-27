import React from "react";
import Button from 'react-bootstrap/Button';

import "./headerAccount.css";

const HeaderAccount = props => (
    <table align="right" className={"headerAccount"}>
           <tr>
                <th><Button type="button" className="btnh btn-primary btn-sm btn-block" href={"/account"} variant="primary" >Account</Button></th>
                <th><Button type="button" className="btnh btn-primary btn-sm btn-block" href={"/messages"} variant="primary">Messages</Button></th>
            </tr>
            <tr>
                <td><Button type="button" className="btnh btn-primary btn-sm btn-block" href={"/credits"} variant="primary">Credits</Button></td>
                <td><Button type="button" className="btnh btn-primary btn-sm btn-block" href={"/board"} variant="primary">Board</Button></td>
            </tr>
    </table>
);

export default HeaderAccount;
