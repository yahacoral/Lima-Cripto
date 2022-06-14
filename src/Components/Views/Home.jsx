import React from 'react'
import styles from '../../styles.module.css';
import Video from "../Video"
import About from "../About"
import Metrics from '../Metrics';
import Speakers from '../Speakers';
import Sponsors from "../Sponsors";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Video/>
        <About/>
        <Metrics/>
        <Speakers/>
        <Sponsors/>
        </div>
    </>
  )
}