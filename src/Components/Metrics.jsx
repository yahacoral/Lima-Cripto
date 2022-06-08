import React from 'react'
import styles from '../styles.module.css';

export default function Metrics() {
  return (
    <>
        <ul className={styles.metrics}>
            <li>
                <h1>+200</h1>
                <p>ASISTENTES</p>
            </li>
            <li>
                <h1>+50</h1>
                <p>SPEAKERS</p>
            </li>
            <li>
                <h1>+30</h1>
                <p>HORAS DE CONTENIDO</p>
            </li>
            <li>
                <h1>+10</h1>
                <p>SPONSORS</p>
            </li>
        </ul>
    </>
  )
}