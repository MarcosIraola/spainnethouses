import React from 'react';
import styles from './footer.module.css';
import logo from './assets/logo.png'
import { Facebook, Instagram } from 'react-feather';

const Footer = () => {

    return (
        <div className={styles.container}>
           <img className={styles.logo} src={logo} alt='logo'/>
           <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget <br/> nullam pellentesque aliquam curabitur cociis.</p>
           <div className={styles.social_icons}>
                <span><Facebook size={24}/></span>
                <span><Instagram size={24}/></span>
           </div>
        </div>
    );
};

export default Footer;