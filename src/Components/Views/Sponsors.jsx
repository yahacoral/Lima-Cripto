import React from 'react'
import styles from '../../styles.module.css'
import {bitcoinSponsors, BitcoinMotiv, mail} from "../../Constants"

export default function Sponsors() {
  return (
    <>
    <div className={styles.section}>
      <span>
      <h1>Sponsors</h1>
      <h2>Bitconf Perú 2022 es respaldado por empresas y proyectos que están construyendo Bitcoin activamente y comprometidos con el avance de su ecosistema.</h2>
      </span>
    </div>

    <div className={styles.titleSponsor}>
      <h3>Title Sponsor</h3>
      <img src={BitcoinMotiv} alt="" />
    </div>

    <div className={styles.sponsors}>
      <div className={styles.secondarySponsor} id={styles.bitcoinSponsors}>
        <h1>Bitcoin Sponsor</h1>
        <span>
        {bitcoinSponsors.map((sponsor) => (
          <img src={sponsor.image} alt={sponsor.alt} />
          ))}
        </span>
      </div>

      <div className={styles.secondarySponsor}>
        <h1>Etherium Sponsor</h1>
        <span>
        {bitcoinSponsors.map((sponsor) => (
          <img src={sponsor.image} alt={sponsor.alt} />
          ))}
        </span>
      </div>

      <div className={styles.secondarySponsor} id={styles.satoshiSponsors}>
        <h1>Satoshi Sponsor</h1>
        <span>
        {bitcoinSponsors.map((sponsor) => (
          <img src={sponsor.image} alt={sponsor.alt} />
          ))}
        </span>
      </div>
    </div>

    <div className={styles.section} id={styles.becomeSponsor}>
        <span>
        <h2>¿Quieres ser Sponsor?</h2>
        <p>Convierte este evento en una oportunidad excelente para dar visibilidad a tu empresa. Bitconf Perú 2022 es una excelente opción para impulsar tu marca, anunciarte con nosotros ofrece proyección para tu marca en un mercado cautivo interesado en tu producto.</p>

        <a href={mail} target="_blank" rel="noreferrer" className={styles.secondaryButton}>Solicitar información</a>
        </span>
      </div>

    </>
  )
}
