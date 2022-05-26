import React from 'react'
import styles from '../../styles.module.css';
import Video from "../Video"
import About from "../About"

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Video/>
        <About/>

        {/* 

        <div className={styles.speakers}>
        </div>

        <div className={styles.mediaPartners}>
        </div> */}

      </div>
    </>
  )
}