import React from 'react'
import styles from '../../styles.module.css';
import ImageSlider from '../ImageSlider';
import {capitalArray, fuckupNightsArray} from '../../Constants'

export default function Gallery() {
  return (
    <>
        <div className={styles.bannerCategory}>
          <h1>Eventos Pasados</h1>
          <p>Conoce nuestras anteriores conferencias de bitcoin.</p>
        </div>
        <div className={styles.events}>
          <div>
            <ImageSlider imageArray={capitalArray}/>
            <h3>Lima Cripto Capital Conference</h3>
            <p>Capital Conference 2021 <br/>
            Lima, Perú <br/>
            Abril 29 y 30, 2021</p>
          </div>
          <span></span>
          <div>
            <ImageSlider imageArray={fuckupNightsArray}/>
            <h3>Fuckup Nights - Beer & Crypto</h3>
            <p>Beer & Crypto <br/>
            Lima, Perú <br/>
            Mayo 27, 2021 </p>
          </div>
        </div>
    </>
  )
}
