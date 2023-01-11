import React from "react";
import mac from "../assets/mac.jpg";
import hp from "../assets/hp.jpg";
import iphone from "../assets/iphone.jpg";
import music from "../assets/music.png";
import vs from "../assets/vscode.png";
import fig from "../assets/fig.png";
import pc from "../assets/pc.jpeg";
import ij from "../assets/ij.jpeg";

function Tech() {
    return (
        <div className="ts">
            <p>
                🖥️ Everything I use to take my coding experience to the next
                level.
            </p>

            <div className="ts-card">
                <img src={mac} alt="mac" />
                <div className="ts-card-content">
                    <span className="headliner">DEVICE</span>
                    <h3>MacBook Pro 14" M1 Pro / 32GB Variant</h3>
                    <a href="">Buy Here</a>
                </div>
            </div>

            <div className="ts-card">
                <img src={hp} alt="headphones" />
                <div className="ts-card-content">
                    <span className="headliner">AUDIO</span>
                    <h3>Phlips Performance / PH805</h3>
                    <a href="">Buy Here</a>
                </div>
            </div>

            <div className="ts-card">
                <img src={iphone} alt="iphone" />
                <div className="ts-card-content">
                    <span className="headliner">PHONE</span>
                    <h3>iPhone 12</h3>
                    <a href="">Buy Here</a>
                </div>
            </div>

            <br />
            <br />
            <p>
                ⌨️ Apps I Use
            </p>

            <div className="ts-card">
                <img src={music} alt="music" />
                <div className="ts-card-content">
                    <span className="headliner">MUSIC</span>
                    <h3>Apple Music</h3>
                    <a href="">App Store</a>
                </div>
            </div>

            <div className="ts-card">
                <img src={pc} alt="pc" />
                <div className="ts-card-content">
                    <span className="headliner">PYTHON</span>
                    <h3>PyCharm Community Edition</h3>
                    <a href="">JetBrains</a>
                </div>
            </div>

            <div className="ts-card">
                <img src={ij} alt="ij" />
                <div className="ts-card-content">
                    <span className="headliner">FLUTTER / DART</span>
                    <h3>IntelliJ IDEA CE</h3>
                    <a href="">JetBrains</a>
                </div>
            </div>

            <div className="ts-card">
                <img src={vs} alt="vscode" />
                <div className="ts-card-content">
                    <span className="headliner">REACT / WEB APPS</span>
                    <h3>VS Code</h3>
                    <a href="">Download Here</a>
                </div>
            </div>

            <div className="ts-card">
                <img src={fig} alt="fig" />
                <div className="ts-card-content">
                    <span className="headliner">DESIGN / UI</span>
                    <h3>Figma</h3>
                    <a href="">Download Here.</a>
                </div>
            </div>
        </div>
    );
}

export default Tech;
