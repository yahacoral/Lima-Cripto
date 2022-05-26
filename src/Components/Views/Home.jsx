import React from 'react'
import styles from '../../styles.module.css';
import Video from "../Video"
import About from "../About"
import Metrics from '../Metrics';
import Speakers from '../Speakers';
import Agenda from "../Agenda";
import MediaPartners from "../MediaPartners";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Video/>
        <About/>
        <Metrics/>
        <Speakers/>
        <Agenda/>
        <MediaPartners/>
      </div>
    </>
  )
}