import React, { useState } from 'react'
import CurrentProject from './CurrentProject';
import Tech from './Tech';
import Timeline from './Timeline';
import Hobbies from './Hobbies';

function MainFrame() {

    const [tab, setTab] = useState(2);

  return (
    <div className="mf">
        <div className="mf-header">
            <h3>Arnav Jain</h3>
            <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
        </div>
        <div className="tabs">
            <div className={tab == 0 ? "tab highlighted" : "tab"} onClick={() => setTab(0)}>
                <span>👋🏼 Hey There!</span>
            </div>
            <div className={tab == 1 ? "tab highlighted" : "tab"} onClick={() => setTab(1)}>
                <span>Working On</span>
            </div>
            <div className={tab == 2 ? "tab highlighted" : "tab"} onClick={() => setTab(2)}>
                <span>Tech</span>
            </div>
            <div className={tab == 3 ? "tab highlighted" : "tab"} onClick={() => setTab(3)}>
                <span>Hobbies</span>
            </div>
        </div>

        <hr />
        <br />

        {
            tab == 0 ? <Timeline />
            
            : tab == 1 ? <CurrentProject />

            : tab == 2 ? <Tech />
            
            : <Hobbies />
        }
    </div>
  )
}

export default MainFrame