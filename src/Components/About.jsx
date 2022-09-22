import React from 'react'
import styles from '../styles.module.css';
import ImageSlider from './ImageSlider';
import {aboutDescription, aboutSubtitle, aboutArray} from "../Constants"

export default function About() {
  return (
    <>
        <div>
        <div className={styles.videoBox}></div>
        <div className={styles.section}>
            <span>
              <h1>La experiencia <br/> BITCONF LATAM 2022</h1>
              <h2>{aboutSubtitle}</h2>
            </span>
            <div className={styles.description}>
              <ImageSlider imageArray={aboutArray}/>
              <span></span>
                <p>
                  {aboutDescription} <br/> <br/>
                  <b>Fecha:</b> 
                  TO BE CONFIRMED <br/>
                  <b>Lugar:</b> 
                  TO BE CONFIRMED
                </p>
            </div>

            <a href="/Agenda" className={styles.primaryButton}>Ver agenda</a>
          
        </div>
        </div>
    </>
  )
}
