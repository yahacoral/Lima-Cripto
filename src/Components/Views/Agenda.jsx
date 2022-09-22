import React from 'react'
import styles from '../../styles.module.css';
import Tabs from "../Tabs"

export default  function Agenda() {

  return (
    <>
      <div  className={styles.bannerCategory}>
        <h1>Agenda</h1>
        <p>¡Vive la experiencia Bitconf Latam minuto a minuto!</p>
      </div>
      <div className={styles.section}>
        <Tabs/>
      </div>
    </>
  )
}
