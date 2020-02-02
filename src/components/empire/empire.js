import React from 'react';

import EmpireTabs from "./empireTabs.js";
import EmpireOverview from "./empireOverview/empireOverview";
import FleetOverview from "./fleetOverview/fleetOverview";
import BaseHeader from "./base/baseHeader";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios"
import api from "../../api";

// <Route path="/empire/" component={BaseHeader} />
//                        <Route path="/empire/fleets" exact component={FleetOverview} />


function Empire() {
    return (
        <div>
            <EmpireTabs/>
            <Router>
                <Switch>
                    <Route path="/empire" exact component={EmpireOverview} />
                </Switch>
            </Router>
        </div>
    );
}


export default Empire;
