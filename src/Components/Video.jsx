import React,{useState} from 'react'
import styles from '../styles.module.css';
import { ReactComponent as PlayIcon } from "../Assets/Icons/play.svg";
import {youtubeVideo, videoTitle} from "../Constants"

export default function Video() {
    const [show, setShow]=useState(false)
  return (
    <>
        <div className={styles.video}>
          <div className={styles.poster}>
            <h1>{videoTitle}</h1>
            <button onClick={()=>setShow(true)}>
                <PlayIcon/>
                {/* <p>Ver video</p> */}
            </button>
          </div>
          { show &&
            <iframe 
            className={styles.frame} 
            src={youtubeVideo} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            }
        </div>
    </>
  )
}