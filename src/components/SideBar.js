import React, { useState } from "react";
import icon from "../assets/icon.png";
import me from "../assets/me.jpeg";

function SideBar() {

    const [currentNav, setCurrentNav] = useState("home");

    return (
        <div className="sidebar">
            <img src={icon}/>
            <div className="links">
                <div className={currentNav == "home" ? "controller controller-selected" : "controller"}>
                    <ion-icon name="planet-outline"></ion-icon>
                    <span className="tooltip">Home</span>
                </div>
                <div className={currentNav == "projects" ? "controller controller-selected" : "controller"}>
                    <ion-icon name="terminal-outline"></ion-icon>
                    <span className="tooltip">Projects</span>
                </div>
                <div className={currentNav == "profile" ? "controller controller-selected" : "controller"}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span className="tooltip">Profile</span>
                </div>
            </div>
            <img src={me} className="profile"/>
        </div>
    );
}

export default SideBar;
