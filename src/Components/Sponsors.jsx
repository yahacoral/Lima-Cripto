import React from 'react'
import styles from '../styles.module.css';
import SponsorsCategories from "./SponsorsCategories"
import {mediaPartners} from "../Constants"

export default function Sponsors() {
  return (
    <>
      <div className={styles.section}>
       <span>
          <h1>Sponsors</h1>
          <h2>Bitconf 2022 no sería posible sin nuestros muchos socios en la comunidad de Bitcoin y sus contribuciones al evento.</h2>
       </span>
      </div>

      <SponsorsCategories/>
      
       <div className={styles.section}>
          <span>
            <h1>Con el apoyo de</h1>
            <h2>Bitconf Media Partners 2022</h2>
          </span>
          <div className={styles.partners}>
            {mediaPartners.map((mediaPartner) => (
            <img src={mediaPartner.image} alt={mediaPartner.alt} />
            ))}
          </div>

          <a href="/Speakers" target="_blank" rel="noreferrer" className={styles.primaryButton}>¿Quieres ser Sponsor?</a>
      </div>
    </>
  )
}
