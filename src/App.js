import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from './Components/Banner';
import Header from './Components/Header'
import Navbar from './Components/Navbar';
import Mainview from './Components/Mainview';
import Footer from "./Components/Footer";
import './App.css';
import styles from './styles.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Banner/>
        <Header/>
        <Navbar/>
        <Mainview/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
