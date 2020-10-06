import React from 'react';
import styles from './navbar.module.css';
import logo from './assets/logo.png';
import { Smartphone, Phone, Mail } from 'react-feather';


const NavBar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.container_interno}>

                <div className={styles.div_logo}>
                    <img className={styles.logo} src={logo} alt='Spainnethouses' />
                    <h4 className={styles.title}>www.spainnethouses.com</h4>
                </div>
                <div className={styles.div_menu}>
                    <div className={styles.div_contact}>
                        <p><Phone size={15}/> +34 654 654 654</p>
                        <p><Smartphone size={15}/> +34 668 545 454</p>
                        <p><Mail size={15}/>  ventas@ventas.com</p>
                    </div>
                    <div className={styles.div_navlink}>
                        <ul className={styles.ul_list}>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>For sale</li>
                            <li>Contact</li>
                           
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NavBar;