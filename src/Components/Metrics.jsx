import React from 'react'
import styles from '../styles.module.css';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import {counterArray} from "../Constants"

export default function Metrics() {
  return (
    <>
        <ul className={styles.metrics}>
        {counterArray.map((counter) => (
            <li>
            <CountUp end={counter.number} redraw={true} prefix="+">
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <p ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
                <h4>{counter.title}</h4>
                </li>
                ))}
        </ul>
    </>
  )
}