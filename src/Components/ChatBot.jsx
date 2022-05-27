import React,{useState} from 'react'
import styles from '../styles.module.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';
import { whatsapp} from '../Constants'
import LimaCriptoIsotipo from "../Assets/Logos/white-isotipo.png";

export default function ChatBot() {
  const [show, setShow]=useState(false)
  const handleIcon = !show

  return (
    <>
      <div className={styles.chatbot}>

        { show && 
          <div className={styles.box}>
            <img src={LimaCriptoIsotipo} alt="isotipo" />
            <p>¿Preguntas sobre Bitconf Perú 2022? Contáctate con uno de los miembros de nuestro equipo.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" className={styles.primaryButton}>INICIAR CHAT</a>
          </div>
        }

        <Box sx={{ '& > :not(style)': { m: 1 } }} onClick={()=>setShow(!show)}>
          <Fab color="primary" aria-label="chat">
            {handleIcon ? <ChatIcon/> : <CloseIcon/>}
          </Fab>
        </Box>
      </div>  
    </>
  )
}