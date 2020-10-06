import React from 'react';
import {Divide} from 'react-feather';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.div_header}>
      <div className={styles.div_finder}>
        <div className={styles.div_select}>
          <label for="tipo">Que buscas...</label>
          <select id="tipo">
            <option value="venta">venta</option>
            <option value="alquiler">alquiler</option>
            <option value="otros">otros</option>
          </select>
        </div>
        <div className={styles.div_select}>
          <label for="room">Habitaciones</label>
          <select id="room">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div >
        <div className={styles.div_select}>
          <label for="ciudad">Elije ciudad</label>
          <select id="ciudad">
            <option value="">Barcelona</option>
            <option value="">Madrid</option>
            <option value="">Sevilla</option>
            <option value="">Bilbao</option>
                  </select>
        </div>
                  <div className={styles.div_select}>
                  <button type="button">Buscar</button>
                  </div>
      </div>
    </div>
  );
};

export default Header;
