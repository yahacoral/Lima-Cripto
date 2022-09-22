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
      
       <div className={styles.section} id={styles.partnerscontainer2}>
          <div className={styles.partnersBox}>
            <span>
              <h1>Con el apoyo de</h1>
            </span>
            <div className={styles.partners}>
              {mediaPartners.map((mediaPartner) => (
              <img src={mediaPartner.image} alt={mediaPartner.alt} />
              ))}
            </div>
          </div>

          <div className={styles.partnersBox}>
            <span>
              <h1>Media Partners</h1>
            </span>
            <div className={styles.partners}>
              {mediaPartners.map((mediaPartner) => (
              <img src={mediaPartner.image} alt={mediaPartner.alt} />
              ))}
            </div>
          </div>
      </div>
    </>
  )
}
