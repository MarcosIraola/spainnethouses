import React from 'react';
import styles from './landing.module.css';
import backgroundimg from './assets/landingbackground.jpg'

const Landing = () => {

    return (
        <div className={styles.container}>
            <img className={styles.background_img} src={backgroundimg} alt='backgroundimg'/>
            
        </div>
    );
};

export default Landing;