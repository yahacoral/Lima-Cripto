import React from 'react'
import styles from '../styles.module.css';
import JoinUsLogo from "../Assets/Logos/logo-joinus.png"

export default function Banner() { 

  return (
    <>
        <div className={styles.banner}>
            <a href="/">Adquiere tus entradas para BITCONF PERÚ en</a> &nbsp;
            <img src={JoinUsLogo } alt="Join us" />
        </div>
    </>
  )
}