import React from 'react'

function MainFrame() {
  return (
    <div className="mf">
        <div className="mf-header">
            <h3>Arnav Jain</h3>
            <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
        </div>
        <div className="tabs">
            <div className="tab highlighted">
                <span>👋🏼 Hey There!</span>
            </div>
            <div className="tab">
                <span>Working On</span>
            </div>
            <div className="tab">
                <span>Tech</span>
            </div>
            <div className="tab">
                <span>Hobbies</span>
            </div>
        </div>

        <hr />
        <br />
    </div>
  )
}

export default MainFrame