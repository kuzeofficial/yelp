import React from 'react'

function SubNavItem(props) {
    return (
        <div className="dropdown is-hoverable">
           <div className="dropdown-trigger">
               <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span className="icon is-small"><i className={`${props.icon}`}></i></span>
                   <span>{props.label}</span>
                </button>
           </div>
           <div className="dropdown-menu" id="dropdown-menu4" role="menu">
               <div className="dropdown-content">
                   <div className="dropdown-item">
                       <p>You can insert <strong>an type of content</strong> within the dropdown menu</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default SubNavItem
