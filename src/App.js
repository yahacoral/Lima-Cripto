import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from './Components/Banner';
import Header from './Components/Header'
import Navbar from './Components/Navbar';
import Mainview from './Components/Mainview';
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
      </div>
    </Router>
  );
}

export default App;
