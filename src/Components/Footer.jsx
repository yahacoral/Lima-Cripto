import React from 'react'
import styles from '../styles.module.css';
import LimaCriptoIsotipo from "../Assets/Logos/isotipo.png";
import LimaCriptoLogo from "../Assets/Logos/white-logo.png";
import { ReactComponent as InstagramIcon } from "../Assets/Icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../Assets/Icons/linkedin.svg";
// import { ReactComponent as YoutubeIcon } from "../Assets/Icons/youtube.svg";
import { Link } from "react-router-dom";
import {instagram, linkedin} from "../Constants"

export default function Footer() {
  return (
    <>
      <div>
        <div className={styles.bannerFooter}>
          <div className={styles.container}>
            <h1>¡Únete al evento más grande <br/>
            de criptomonedas en el Perú!</h1>
            <a href="/" target="_blank" rel="noreferrer" className={styles.secondaryButton}>COMPRAR ENTRADAS</a>
            <ul>
              <li><img src={LimaCriptoIsotipo} alt="isotipo" /></li>
              <li>To be confimed, Lima, Perú.</li>
              <li>Octubre 8-9, 2022</li>
              <li>🟢 ENTRADAS DISPONIBLES</li>
            </ul>
          </div>
        </div>

        <div  className={styles.mainFooter}>
          <div className={styles.containerFooter}>
            <div className={styles.menuFooter}>
              <Link className={styles.navlink} to="/press">
              Noticias
              </Link>
              <Link className={styles.navlink} to="/gallery">
              Galería
              </Link>
              <Link className={styles.navlink} to="/FAQ">
              FAQ
              </Link>
              <Link className={styles.navlink} to="/contact">
              Contacto
              </Link>
            </div>
            <img src={ LimaCriptoLogo} alt="Lima" className={styles.logoFooter} />
            <div>
              <p>Síguenos:</p>
              <div className={styles.social}>
                <a href={instagram} target="_blank" rel="noreferrer" className={styles.socialIcon}><InstagramIcon/></a>
                <a href={linkedin} target="_blank" rel="noreferrer" className={styles.socialIcon}><LinkedinIcon/></a>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>Bitconf Perú 2022. Todos Los Derechos Reservados.</div>
        </div>
      </div>
    </>
  )
}
