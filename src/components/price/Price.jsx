import React from 'react';
import styles from './Price.module.scss';
import {ReactComponent as Suv} from './../../img/jeep.svg'
import {ReactComponent as Sedan} from './../../img/sedan.svg'
import {ReactComponent as Van} from './../../img/van.svg'
import {priceSedan} from './../../priceList/sedan'
import {priceSuv} from './../../priceList/suv'
import {priceVan} from './../../priceList/van'


class Price extends React.Component {

  state = {
    carType: "sedan",
    showPrice: "priceSedan"
  }

  getPrice = (price) => price.map((point) => {
    return <div className={styles.tableHead}>
      <div className={styles.tableDescr}>
        {point.description}
        <div className={styles.tableDescr2}>
          {point.description2}
        </div>
      </div>
      <div className={styles.tablePrice}>{point.price}</div>
    </div>
  })

  chooseCarTypeHandle = (carType) => {
    this.setState({carType: carType}, () => {

    })
  }

  render() {
    return (
      <div className={styles.wrapper}>


        <div className={styles.table}>
          <div className={styles.tableHead}>
            <div className={styles.tableDescr}>Услуга</div>
            <div className={styles.tablePrice}>Цена</div>
          </div>
          {this.getPrice(this.state.carType === "sedan" && priceSedan
            || this.state.carType === "suv" && priceSuv
            || this.state.carType === "van" && priceVan)}
        </div>


        <div className={styles.carChoose}>
          <Sedan
            className={`${styles.carIcon} ${this.state.carType === "sedan" && styles.choosen}`}
            onClick={() => this.chooseCarTypeHandle('sedan')}
          />
          <Suv className={`${styles.carIcon} ${this.state.carType === "suv" && styles.choosen}`}
               onClick={() => this.chooseCarTypeHandle('suv')}
          />
          <Van className={`${styles.carIcon} ${this.state.carType === "van" && styles.choosen}`}
               onClick={() => this.chooseCarTypeHandle('van')}
          />
        </div>
      </div>
    );
  }
}

export default Price;