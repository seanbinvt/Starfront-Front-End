import React from "react";
import Button from 'react-bootstrap/Button';

import "./empireTabs.css";

function EmpireTabs() {
    return (
        <table align="center" className="tabs">
            <tbody>
            <tr>
                <th><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire"}
                            variant="primary">Overview</Button></th>
                <th><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/production"}
                            variant="primary">Production</Button></th>
                <th><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/economy"}
                            variant="primary">Economy</Button></th>
                <th><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/trade"}
                            variant="primary">Trade</Button></th>
                <th><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/reports"}
                            variant="primary">Reports</Button></th>
            </tr>

            <tr>
                <td><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/capacities"}
                            variant="primary">Capacities</Button></td>
                <td><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/structures"}
                            variant="primary">Structures</Button></td>
                <td><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/fleets"}
                            variant="primary">Fleets</Button></td>
                <td><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/units"}
                            variant="primary">Units</Button></td>
                <td><Button type="button" className="btne btn-secondary btn-sm btn-block" href={"/empire/technologies"}
                            variant="primary">Technologies</Button></td>
            </tr>
            </tbody>
        </table>
    );
}

export default EmpireTabs;
