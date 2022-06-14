import React from 'react'
import styles from '../styles.module.css'
import {bitcoinSponsors, BitcoinMotiv} from "../Constants"

export default function SponsorsCategories() {
  return (
    <>
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
        <h1>Ethereum Sponsor</h1>
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

    </>
  )
}