import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './Views/Home';
import FAQ from './Views/FAQ';
import Press from './Views/Press'
import Gallery from './Views/Gallery';
import Contact from './Views/Contact';
import styles from '../styles.module.css'

export default function Mainview() {
  return (
    <div className={styles.mainview}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Press" element={<Press />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contacto" element={<Contact />} />
      </Routes>
    </div>
  )
}
