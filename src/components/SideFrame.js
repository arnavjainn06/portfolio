import React from 'react'
import me from "../assets/me.jpeg";

function SideFrame() {
  return (
    <div className='sf'>
        <div className="sf-search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder='Search the website'/>
        </div>
        <div className="info">
            <img src={me}/>
            <div className="info-content">
                <h3>Arnav Jain</h3>
                <span>Programmer / Web Developer</span>
            </div>
        </div>
        <div className="wrapper">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
        </div>

        {/* <div className="footer">
            <h3>AJ</h3>
            <span>© 2022 Built by Arnav Jain</span>
        </div> */}
    </div>
  )
}

export default SideFrame