import React from "react";
import "./Header.css";

import { BiCaretDown } from "react-icons/bi";

function Header() {

    return (
        <div className="Header">
            <h1>Rodrigo <br />&<br /> Yohana</h1>
            <a href="#content"><BiCaretDown size={50} className="ButtonDown" /></a>
        </div>
    )
}

export default Header;