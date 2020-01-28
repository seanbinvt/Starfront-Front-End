import React from "react";

import './empireOverview.css';

//Required for database pull logic where a tr is made for every base returned.

const EmpireOverview = props => (
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
        <tr>
            <td>Name</td>
            <td>Axx:xx:xx</td>
            <td>55</td>
            <td>Occ</td>
            <td>Construct</td>
            <td>Produce</td>
            <td>Research</td>
        </tr>

        </tbody>
    </table>
);

export default EmpireOverview;
