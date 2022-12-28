import React from "react";
import robotics from "../assets/robotics.png";
import html from "../assets/html.jpeg";
import code from "../assets/code.jpeg";

function Timeline() {
    return (
        <div className="tl">
            <p>
                👋🏼 Hey There! I am Arnav Jain, a Programmer based in Mumbai, India.
                I specialise in creating React Apps for the web and Mobile Apps using Flutter.
            </p>
            <div className="year-start">
                <div className="circtop"></div>
                <span>Start</span>
            </div>
            <div className="year special-year"></div>
            <div className="tl-tp">
                <img src={robotics} />
                <div className="tl-tp-content">
                    <h2>2017</h2>
                    <h3>Robotics</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris.
                    </p>
                </div>
            </div>
            <div className="year">
                {/* <div className="circtop"></div>
                <div className="circtop"></div> */}
            </div>
            <div className="tl-tp">
                <img src={html} />
                <div className="tl-tp-content">
                    <h2>2018</h2>
                    <h3>Web Development</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris.
                    </p>
                </div>
            </div>
            <div className="year"></div>
            <div className="tl-tp">
                <img src={code} />
                <div className="tl-tp-content">
                    <h2>2018.5</h2>
                    <h3>Programming</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris. laboris eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
