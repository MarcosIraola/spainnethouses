import React from 'react';
import styles from './navbar.module.css';
import logo from './assets/logo.png'


const NavBar = () => {

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='Spainnethouses'/>
            
        </div>
    );
};

export default NavBar;