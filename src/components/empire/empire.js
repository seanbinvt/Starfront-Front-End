import React from 'react';

import EmpireTabs from "./empireTabs.js";
import EmpireOverview from "./empireOverview/empireOverview.js";
import FleetOverview from "./fleetOverview/fleetOverview";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Empire() {
    return (
        <div>
            <EmpireTabs/>
            <Router>
                <Switch>
                    <Route path="/empire" exact component={EmpireOverview} />
                    <Route path="/empire/fleets" exact component={FleetOverview} />
                </Switch>
            </Router>
        </div>
    );
}

export default Empire;
