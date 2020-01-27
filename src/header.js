import React from 'react';

import GameToolbar from "./gameToolbar/gameToolbar";
import HeaderAccount from "./headerAccount/headerAccount";

function Header() {
    return (
        <div>
                    <HeaderAccount/>
            <div><GameToolbar/></div>
        </div>
    );
}

export default Header;
