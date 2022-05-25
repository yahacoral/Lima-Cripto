import React,{useState} from 'react'
import { ReactComponent as PlayIcon } from "../Assets/Icons/play.svg";
import styles from '../styles.module.css';

export default function Video() {
    const [show, setShow]=useState(false)
  return (
    <>
        <div>
          <div className={styles.poster}>
            <h1>El evento más grande de Criptomonedas del Perú</h1>
            <button className={styles.button} onClick={()=>setShow(true)}>
                <PlayIcon/>
                <p>Ver video</p>
            </button>
          </div>
          { show &&
            <iframe className={styles.video} src="https://www.youtube.com/embed/s7x_0htpM9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            }
        </div>
    </>
  )
}