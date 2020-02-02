import React from "react";

import './empireOverview.css';
import axios from "axios";
import api from "../../../api";

//Required for database pull logic where a tr is made for every base returned.

function getInfo() {
    let information = axios.post(
        api.baseUrl + "base",
        {},
        {headers: {'Content-Type': 'application/json'}}
    );


    const items = [];

    for (var base in information) {
        items.push(
            <tr>
                <td href={"/base/" + base['id']}>{base['id']}</td>
                <td>------</td>
                <td> {base['income']}/{base['economy']}</td>
                <td href={"/base/" + base['id'] + "/construction"}>{base['buildingTask']} ({base['buildingQueue'].length})</td>
                <td>(0)</td>
                <td href={"/base/" + base['id'] + "/research"}>{base['researchTask']} ({base['researchQueue'].length})</td>
            </tr>
        )
    }

    return items;
}

function EmpireOverview() {
    const items = getInfo();

    return(
        <table align="center" className="empireOverview">
            <tbody>
            <tr>
                <th>Base</th>
                <th>Location</th>
                <th>Economy</th>
                <th>Occupier</th>
                <th>Construction</th>
                <th>Production</th>
                <th>Research</th>
            </tr>
            {items}
            </tbody>
        </table>
    );
}

export default EmpireOverview;
