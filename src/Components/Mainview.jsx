import React from 'react';
import { Routes, Route} from "react-router-dom";
import styles from '../styles.module.css'
import Home from './Views/Home';
import Agenda from "./Views/Agenda"
import AllSpeakers from "./Views/AllSpeakers"
import AllSponsors from "./Views/AllSponsors"
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
          <Route path="Sobre%20el%20evento" element={<Home />} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/Speakers" element={<AllSpeakers />} />
          <Route path="/Sponsors" element={<AllSponsors />} />
          <Route path="/Noticias" element={<Press />} />
          <Route path="/Eventos%20Pasados" element={<Events />} />
          <Route path="/FAQs" element={<FAQ />} />
          <Route path="/Contacto" element={<Contact />} />
      </Routes>
      <ChatBot/>
    </div>
    </>
  )
}
