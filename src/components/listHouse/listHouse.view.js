import React from 'react';
import HouseCard from '../houseCard/houseCard.view';
import styles from './listHouse.module.css';

const ListHouse = () => {

    return (
        <div className={styles.container}>

            <h2 className={styles.titulo}>Tenemos lo que estas buscando</h2>

            <div className={styles.row}>
                <HouseCard 
                    img={'https://cf.bstatic.com/images/hotel/max1024x768/174/174371067.jpg'}
                    precio={'100.000'}
                    ubicacion={'Málaga, España'}
                />

                <HouseCard 
                    img={'https://img3.idealista.com/blur/WEB_DETAIL-M-L/0/id.pro.es.image.master/34/c4/9b/606383754.jpg'}
                    precio={'140.000'}
                    ubicacion={'Barcelona, España'}
                />

                <HouseCard 
                    img={'https://cdn1.es.casasrurales.net/emp/fotoscasas/2/9/5/8/tm_Acceso%20principal.jpg'}
                    precio={'200.000'}
                    ubicacion={'San Sebastian, España'}
                />
            </div>

            <div className={styles.row}>
                <HouseCard 
                    img={'https://cdn.theculturetrip.com/wp-content/uploads/2018/08/272513687.jpg'}
                    precio={'250.000'}
                    ubicacion={'Barcelona, España'}
                />

                <HouseCard 
                    img={'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1294i215%2F6p7aq3hc4wnkm4apzhas6k2cq5i215&option=N&h=472&permitphotoenlargement=false'}
                    precio={'220.000'}
                    ubicacion={'Barcelona, España'}
                />

                <HouseCard 
                    img={'https://marbelinvest-a224.kxcdn.com/images/w.496/h.358/c.1/mr.0/d.listing_photos/sd.2019-07/i.7886c046d7c73caf29fee7c0dce47c6d.jpg'}
                    precio={'200.000'}
                    ubicacion={'Marbella, España'}
                />
            </div>

            <div className={styles.row}>
                <HouseCard 
                    img={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZmKtHdSwx3sbgFvrW7I9Aa9_ScHsJBm3WXg&usqp=CAU'}
                    precio={'100.000'}
                    ubicacion={'Málaga, España'}
                />

                <HouseCard 
                    img={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyNbS1QnXpWOqaa5wulzmVkqXz88wxt1fLzw&usqp=CAU'}
                    precio={'140.000'}
                    ubicacion={'Barcelona, España'}
                />

                <HouseCard 
                    img={'https://i.pinimg.com/originals/67/72/0a/67720a694a76e08d3cd94329110fe914.jpg'}
                    precio={'200.000'}
                    ubicacion={'San Sebastian, España'}
                />
            </div>



        </div>
    );
};

export default ListHouse;