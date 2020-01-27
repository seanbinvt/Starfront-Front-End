import React from "react";
import Button from 'react-bootstrap/Button';

//import "./gameToolbar.css";

const EmpireTabs = props => (
    <table align="center" className="toolbar">
        <tbody>
        <tr>
            <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/map"} variant="primary" >Map</Button></th>
            <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/fleets"} variant="primary">Fleets</Button></th>
            <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/empire"} variant="primary" >Empire</Button></th>
            <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/commanders"} variant="primary">Commanders</Button></th>
            <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/guild"} variant="primary" >Guild</Button></th>
            <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/notes"} variant="primary">Notes</Button></th>
            <th><Button type="button" className="btnt btn-primary btn-sm btn-block" href={"/bookmarks"} variant="primary" >Bookmarks</Button></th>
        </tr>
        </tbody>
    </table>
);

export default EmpireTabs;
