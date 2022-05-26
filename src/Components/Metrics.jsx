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
                <h1>+20</h1>
                <p>SPEAKERS</p>
            </li>
            <li>
                <h1>+30</h1>
                <p>HORAS DE CONTENIDO</p>
            </li>
            <li>
                <h1>+5</h1>
                <p>MEDIA PATNERS</p>
            </li>
        </ul>
    </>
  )
}