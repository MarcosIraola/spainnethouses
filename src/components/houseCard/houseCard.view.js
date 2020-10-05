import React from 'react';
import styles from './houseCard.module.css';
import { MapPin, Bookmark } from 'react-feather';

const HouseCard = ({img, precio, ubicacion}) => {

    return (
        <div className={styles.container}>
            <span className={styles.save}><Bookmark size={18}/></span>
            <img className={styles.img} src={img} alt={'House'}/>
            <span className={styles.precio}>Desde € {precio}</span>
            <span className={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</span>
            <div className={styles.datos}>
                <span><MapPin size={12}/> {ubicacion}</span>
            </div>
        </div>
    );
};

export default HouseCard;