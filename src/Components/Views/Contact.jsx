import React from 'react'
import styles from '../../styles.module.css';
import { ReactComponent as WhatsappIcon } from "../../Assets/Icons/whatsapp.svg";
import { ReactComponent as MailIcon } from "../../Assets/Icons/mail.svg";
import {instagram, linkedin, mail, whatsapp} from "../../Constants"

export default function Contact() {

  return (
    <>
      <div className={styles.section}>
      <div className={styles.contact}>
        <h1>¿Necesitas ayuda?</h1>
        <p>Conversa con nosotros de lunes a viernes de 9:00 am a 8:00pm y sábado de 9:00 am a 6:00 pm.</p>

        <ul>
          <li>
            <WhatsappIcon/> Escríbenos al <a href={whatsapp} target="_blank" rel="noreferrer">+51 956 174 788</a>
          </li>
          <li>
            <MailIcon/>
            Envíanos un correo al <a href={mail} target="_blank" rel="noreferrer">hablemos@limacripto.com</a>
          </li>
        </ul>

      </div>
      </div>
    </>
  )
}