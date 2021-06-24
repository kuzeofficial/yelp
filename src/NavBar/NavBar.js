import React from 'react'
import logo from '../assets/logo.png'
import styles from './NavBar.module.css'
import SearchBar from '../LandingPage/SearchBar/SearchBar'

export default function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <img src={logo} alt='yelp logo' className={styles.logo}></img>
            <SearchBar small/>
            <button className={`button ${styles['nav-button']}`}>Sign in</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    )
}
