import React from 'react';
import styles from './landing.module.css';
import backgroundimg from './assets/landingbackground.jpg'
import ListHouse from '../../components/listHouse/listHouse.view';

const Landing = () => {

    return (
        <div className={styles.container}>
            <img className={styles.background_img} src={backgroundimg} alt='backgroundimg'/>
            <ListHouse />
        </div>
    );
};

export default Landing;