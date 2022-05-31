import React from 'react';
import { Routes, Route} from "react-router-dom";
import styles from '../styles.module.css'
import Home from './Views/Home';
import FAQ from './Views/FAQ';
import Press from './Views/Press'
import Events from './Views/Events';
import Contact from './Views/Contact';
import ChatBot from "./ChatBot"

export default function Mainview() {
  return (
    <>
      <div className={styles.mainview}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Evento%202022" element={<Home />} />
          <Route path="/Noticias" element={<Press />} />
          <Route path="/Eventos" element={<Events />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contacto" element={<Contact />} />
      </Routes>
      <ChatBot/>
    </div>
    </>
  )
}
