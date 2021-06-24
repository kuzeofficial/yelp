import React from 'react'
import styles from "./SearchBar.module.css"

export  default function SearchBar (props) {
    const sizeClass = props.small ? '' : 'is-medium' 
    return (
       <div>
           <div className="field has-addons ">
                <p className="control">
                    <button className={`button is-static ${sizeClass}`}>Find</button>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass}  ${styles['input-control']}`} type="text" placeholder="plumbers, delivery, takeouts..." />
                </p>
                <p className="control">
                    <a className={`button is-static ${sizeClass}`} href="*">Near</a>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass}  ${styles['input-control']}`} type="text" value="San Francisco, CA" />
                </p>
                <div className={`button ${sizeClass} ${styles['search-button']}`}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span>
                </div>
            </div>
       </div>
    )
}
