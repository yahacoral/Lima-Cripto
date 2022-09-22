import React from 'react'
import styles from '../styles.module.css'
import {mail, logo} from "../Constants"

export default function Header() {
  return (
    <>
        <div className={styles.header}>
            <img src={logo} alt="logo" className={styles.logoHeader}/>
            <h2 className={styles.subtitle}>PERÚ 2022</h2>
            <a href="/" target="_blank" rel="noreferrer" className={styles.primaryButton}>Comprar entradas</a>
            <a href={mail} target="_blank" rel="noreferrer" className={styles.secondaryButton}>Más información</a>
        </div>
    </>
  )
}
