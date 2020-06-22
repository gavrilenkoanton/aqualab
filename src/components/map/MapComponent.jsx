import React from 'react';
import styles from './MapComponent.module.scss';
import { YMaps, Map, Placemark } from "react-yandex-maps";


function MapComponent(props) {

  const mapData = {
    center: [53.934538, 27.581874],
    zoom: 15,
    // width: 600
  };

  const coordinates = [
    [53.937538, 27.581874],
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.mapDescription}>
        <span className={styles.adress}>Наш адрес:</span>
        <span>Богдановича 155в (evo wellness club)</span>
      </div>
      <YMaps >
        <Map defaultState={mapData} className={styles.mapSize}>
          {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
      </YMaps>
    </div>
  );
}

export default MapComponent;