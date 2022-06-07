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
          {/* <h2>Bitconf Perú 2022 cuenta con el respaldo de medios referentes en el ecosistema Bitcon.</h2> */}
       </span>
        <div className={styles.partners}>
          <img src={beInCripto} alt="" />
          <img src={cointelegraph } alt="" />
          <img src={diarioBitcoin} alt="" />
        </div>
      </div>

    </>
  )
}
