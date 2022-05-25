import React from 'react'
import { Link } from "react-router-dom";
import LimaCriptoLogo from "../Assets/Logos/logo.png";
import { ReactComponent as InstagramIcon } from "../Assets/Icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../Assets/Icons/linkedin.svg";
import { ReactComponent as YoutubeIcon } from "../Assets/Icons/youtube.svg";
import styles from '../styles.module.css'

export default function Navbar() {
  return (
    <>
       <div className={styles.navbar}>
        <Link className='active' to="/">
          <img className={styles.logo} src={LimaCriptoLogo} alt="logo of Lima Cripto" />
        </Link>

        <div className={styles.menu}>
         <Link className={styles.link} to="/">
            Evento 2022
          </Link>
          <Link className={styles.link} to="/press">
            Noticias
          </Link>
          <Link className={styles.link} to="/gallery">
            Galería
          </Link>
          <Link className={styles.link} to="/FAQ">
            FAQ
          </Link>
          <Link className={styles.link} to="/contact">
            Contacto
          </Link>

          <div className={styles.social}>
            <a href="https://www.instagram.com/lima.cripto/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/company/lima-cripto/" target="_blank" rel="noreferrer"><LinkedinIcon/></a>
            <a href="/" target="_blank" rel="noreferrer"><YoutubeIcon/></a>
          </div>
        </div>
       </div>
    </>
  )
}