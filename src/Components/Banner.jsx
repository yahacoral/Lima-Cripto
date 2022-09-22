import React,{useState} from 'react'
import styles from '../styles.module.css';
import JoinUsLogo from "../Assets/Logos/logo-joinus.png"
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

export default function Banner() { 
  const [show, setShow]=useState(true)

  return (
    <>
        
      { show && 
        <div className={styles.banner}>
          <a href="/">Adquiere tus entradas para BITCONF LATAM en &nbsp;
            <img src={JoinUsLogo } alt="Join us" />
          </a>  

          <Box onClick={()=>setShow(false)} className={styles.bannerBtn}>
            <CloseIcon/>
          </Box>

        </div>
      }
    </>
  )
}