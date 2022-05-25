import React from 'react'
import Video from "../Video"
import About from "../About"
import styles from '../../styles.module.css';

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