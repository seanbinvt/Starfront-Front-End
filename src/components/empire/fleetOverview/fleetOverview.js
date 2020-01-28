import React from "react";

import './fleetOverview.css';

//Required for database pull logic where a tr is made for every base returned.

const FleetOverview = props => (
    <table align="center" className="fleetOverview">
        <tbody>
        <tr>
            <th>FLEET</th>
            <th>LOCATION</th>
            <th>FT</th>
            <th>BO</th>
            <th>HB</th>
            <th>IB</th>
            <th>CV</th>
            <th>RC</th>
            <th>DE</th>
            <th>FR</th>
            <th>IF</th>
            <th>SS</th>
            <th>OS</th>
            <th>CR</th>
            <th>CA</th>
            <th>HC</th>
            <th>BS</th>
            <th>FC</th>
            <th>DN</th>
            <th>TI</th>
            <th>LE</th>
            <th>DS</th>
        </tr>
        <tr>
            <td>NAME</td>
            <td>Axx:xx:xx</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>

        </tbody>
    </table>
);

export default FleetOverview;
