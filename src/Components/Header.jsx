import React from 'react'
import LimaCriptoIsotipo from "../Assets/Logos/isotipo.png";
import styles from '../styles.module.css'

export default function Header() {
  return (
    <>
        <div className={styles.header}>
            <img src={LimaCriptoIsotipo} alt="isotipo" className={styles.isotipo} />
            <h1 className={styles.title}>BITCONF PERÚ <br/>2022</h1>
            <h2 className={styles.subtitle}>El evento más grande de Criptomonedas del Perú</h2>
            <a href="/" target="_blank" rel="noreferrer" className={styles.primaryButton}>Obtener entradas</a>
            <a href="/" target="_blank" rel="noreferrer" className={styles.secondaryButton}>Ver el programa</a>
        </div>
    </>
  )
}
