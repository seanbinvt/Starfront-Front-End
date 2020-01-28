import React from 'react';

import GameToolbar from "./components/gameToolbar/gameToolbar";
import HeaderAccount from "./components/headerAccount/headerAccount";

function Header() {
    return (
        <div>
                    <HeaderAccount/>
            <div><GameToolbar/></div>
        </div>
    );
}

export default Header;
