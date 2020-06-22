import React from 'react';
import styles from './HomePage.module.scss';


function HomePage(props) {
  return (
    <div  className={styles.app}>
      {props.logoNeon
        ? <div className={styles.logo}>
          <div className={styles.sign}>
            аквал<span className={styles.flicker}>а</span>б
          </div>
        </div>
        :
        <div className={styles.logoOff}>
          аквалаб
        </div>
      }
    </div>
  );
}

export default HomePage;