import React from 'react'
import styles from '../styles.module.css';
import {instagram} from "../Constants"
import Tabs from "../Components/Tabs"

export default  function Agenda() {

  return (
    <>
      <div className={styles.section}>
        <span>
          <h1>AGENDA</h1>
          <h3><a href={instagram} className={styles.link}>Síguenos en Instagram</a> para estar al tanto de las últimas actualizaciones de Bitconf Perú 2022</h3>
        </span>

        <Tabs/>
      </div>
    </>
  )
}
