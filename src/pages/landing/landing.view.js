import React from 'react';
import styles from './landing.module.css';
import ListHouse from '../../components/listHouse/listHouse.view';

const Landing = () => {

    return (
        <div className={styles.container}>
            <ListHouse />
        </div>
    );
};

export default Landing;