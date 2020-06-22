import React from 'react';
import styles from './Gift.module.scss';
import {ReactComponent as Instagram} from "../../img/instagramLogo.svg";


function Gift(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.serf}>
        <div>
          <div className={styles.aqualab}>аквалаб</div>
          <div className={styles.studio}>детейлинг-студия</div>
        </div>
        <div>Подарочный сертификат</div>
      </div>
      <div className={styles.text}>
        <div>
          Приобрести подарочный
          <span className={styles.textColor}>сертификат</span>
          вы можете по адресу:
        </div>
        <div>
          Богдановича 155в
        </div>
        <div>
          Мы бесплатно доставим сертификат вам в любую точку г.Минска
        </div>
        <div>
          Заказать сертификат можно по телефону:
        </div>
        <div>
          <a href="tel:+375296604433" className={styles.tel}>
            +375 29 660 44 33
          </a>
        </div>
        <div>
          Ваш
          <span className={styles.textColor2}>
            аквалаб
          </span>
        </div>
      </div>
    </div>
  );
}

export default Gift;