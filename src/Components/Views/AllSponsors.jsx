import React from 'react'
import styles from '../../styles.module.css'
import {mail} from "../../Constants"
import SponsorsCategories from '../SponsorsCategories'

export default function AllSponsors() {
  return (
    <>
      <div className={styles.section}>
        <span>
          <h1>Sponsors</h1>
          <h2>
            Bitconf Perú 2022 es respaldado por empresas y proyectos que están construyendo Bitcoin activamente y comprometidos con el avance de su ecosistema.
          </h2>
        </span>
      </div>

      <SponsorsCategories/>

      <div className={styles.section} id={styles.becomeSponsor}>
        <span>
          <h2>¿Quieres ser Sponsor?</h2>
          <p>
            Convierte este evento en una oportunidad excelente para dar visibilidad a tu empresa. Bitconf Perú 2022 es una excelente opción para impulsar tu marca, anunciarte con nosotros ofrece proyección para tu marca en un mercado cautivo interesado en tu producto.
          </p>

          <a href={mail} target="_blank" rel="noreferrer" className={styles.secondaryButton}>Solicitar información
          </a>
        </span>
      </div>

    </>
  )
}
