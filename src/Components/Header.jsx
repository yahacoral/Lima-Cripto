import React from 'react'
import LimaCriptoIsotipo from "../Assets/Logos/isotipo.png";
import styles from '../styles.module.css'

export default function Header() {
  return (
    <>
        <div className={styles.header}>
            <img src={LimaCriptoIsotipo} alt="isotipo" className={styles.isotipo} />
            <h1 className={styles.title}>BITCONF PERÚ <br/>2022</h1>
            <h2 className={styles.subtitle}>1era Edición | 8-9 Octubre</h2>
            <a href="/" target="_blank" rel="noreferrer" className={styles.primaryButton}>Obtener entradas</a>
            <a href="mailto:hablemos@limacripto.com" target="_blank" rel="noreferrer" className={styles.secondaryButton}>Solicitar información</a>
        </div>
    </>
  )
}
