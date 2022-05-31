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
            <WhatsappIcon/> &nbsp; Escríbenos al <a href={whatsapp} target="_blank" rel="noreferrer">+51 956 174 788</a>
          </li>
          <li>
            <MailIcon/> &nbsp;
            Envíanos un correo al <a href={mail} target="_blank" rel="noreferrer">hablemos@limacripto.com</a>
          </li>
        </ul>

        <h1>¿Quieres convertirte en sponsor?</h1>

        <ul>
          <li>
            Conoce los beneficios y <a href={mail} target="_blank" rel="noreferrer"> dejános tus datos</a>
          </li>
        </ul>

        <h1>Síguenos:</h1>

        <ul>
          <li>En Instagram como <a href={instagram} target="_blank" rel="noreferrer">@lima.cripto</a></li>
          <li>En Linkedin como <a href={linkedin} target="_blank" rel="noreferrer">company/lima-cripto</a></li>
        </ul>

      </div>
      </div>
    </>
  )
}