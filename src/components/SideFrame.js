import React from 'react'

function SideFrame() {
  return (
    <div className='sf'>
        <div className="sf-search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder='Search the website'/>
        </div>
    </div>
  )
}

export default SideFrame