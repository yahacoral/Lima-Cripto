import React from 'react'
import styles from '../styles.module.css';
import ImageSlider from './ImageSlider';
import {description, subtitle} from "../Constants"

export default function About() {
  return (
    <>
        <div className={styles.section}>
            <h1>La experiencia <br/> BITCONF PERÚ 2022</h1>
            <h2>{subtitle}</h2>
            <div className={styles.description}>
              <ImageSlider />
              <span></span>
                <p>
                  {description} <br/> <br/>
                  <b>Fecha y Hora:</b> 
                  8 de octubre de 2022, TBD <br/>
                  9 de octubre de 2022, TBD <br/>
                  <b>Lugar del evento:</b> 
                  TO BE CONFIRMED, Lima, Perú.
                </p>
            </div>
            <a href="/" target="_blank" rel="noreferrer" className={styles.primaryButton}>Agregar a Calendar</a>
        </div>
    </>
  )
}
