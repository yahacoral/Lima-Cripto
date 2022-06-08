import React from 'react'
import styles from '../styles.module.css';
import beInCripto from "../Assets/Img/beInCripto.png"
import cointelegraph from "../Assets/Img/cointelegraph.png"
import diarioBitcoin from "../Assets/Img/diarioBitcoin.png"

export default function MediaPartners() {
  return (
    <>
      <div className={styles.section}>
       <span>
          <h1>Con el apoyo de</h1>
       </span>

       <div className={styles.partnersBox}>
        <div className={styles.partnersContainer }>
          <h2>Co-Organizadores</h2>
          <div className={styles.partners}>
            <img src={beInCripto} alt="" />
            <img src={cointelegraph } alt="" />
            <img src={diarioBitcoin} alt="" />
          </div>
          </div>

          <div className={styles.partnersContainer }>
          <h2>Media Partners</h2>
          <div className={styles.partners}>
            <img src={beInCripto} alt="" />
            <img src={cointelegraph } alt="" />
            <img src={diarioBitcoin} alt="" />
          </div>
          </div>
       </div>

        <a href="/Sponsors" target="_blank" rel="noreferrer" className={styles.primaryButton}>Ver Sponsors</a>
      </div>
  

    </>
  )
}
