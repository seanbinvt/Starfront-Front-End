import React from "react";
import Button from 'react-bootstrap/Button';

import axios from "axios";
import api from "../../../api";

async function BaseHeader() {
    const rows = [];
    const response = await axios.post(
        api.baseUrl + "empire",
        {},
        {headers: {'Content-Type': 'application/json'}}
    );

    return(
        <table align="center" className="toolbar">
            <tbody>
            <tr>
                <th>#</th>
                <th>Location</th>
                <th>Area</th>
                <th>Energy</th>
                <th>Population</th>
                <th>Trade Routes</th>
            </tr>
            <tr>
                <th>Rename - Disband</th>
                <th>Axx:xx:xx</th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={""} variant="primary" >Area</Button></th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/commanders"} variant="primary">Energy</Button></th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/empire"} variant="primary" >Population</Button></th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/commanders"} variant="primary">Trade Routes</Button></th>
            </tr>
            <tr>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/map"} variant="primary" >Overview</Button></th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/fleets"} variant="primary">Structures</Button></th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/empire"} variant="primary" >Defenses</Button></th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/commanders"} variant="primary">Production</Button></th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/empire"} variant="primary" >Research</Button></th>
                <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/commanders"} variant="primary">Trade</Button></th>
            </tr>
            </tbody>
        </table>
    );
}

export default BaseHeader;
