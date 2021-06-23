import React from 'react'
import styles from "./SearchBar.module.css"

export  default function SearchBar () {
    return (
       <div>
           <div className="field has-addons ">
                <p className="control">
                    <button className="button is-static is-medium">Find</button>
                </p>
                <p className="control">
                    <input className={`input is-medium  ${styles['input-control']}`} type="text" placeholder="plumbers, delivery, takeouts..." />
                </p>
                <p className="control">
                    <a className="button is-static is-medium" >Near</a>
                </p>
                <p className="control">
                    <input className={`input is-medium  ${styles['input-control']}`} type="text" value="San Francisco, CA" />
                </p>
                <div className={`button is-medium ${styles['search-button']}`}>
                    <span className={`icon is-small ${styles['search-icon']}`}><i class="fas fa-search"></i></span>
                </div>
            </div>
       </div>
    )
}
