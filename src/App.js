import React from 'react';
import app from './'
import Navbar1 from './Components/Navbar1';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import NavbarHero from './Components/NavbarHero';
import KzoToken from './Components/KzoToken';
import RealLounch from './Components/RealLounch';
import Nfts from './Components/Nfts';
import Stacking from './Components/Stacking';
import Resource from './Components/Resource';
import Carrer from './Components/Carrer'
import Openapp from './Components/Openapp'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';




import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";





function App() {
  useEffect(() => {
    Aos.init({duration:1250})
  },[])
  return (
    <div>
      <Router>
       

        <Navbar />
      <Routes>
        <Route path ="" element={<NavbarHero/>} />
        
        <Route path ="/kzotoken" element={<KzoToken/>} />
        <Route path ="/RealLounch" element={<RealLounch/>} />
        <Route path ="/Nfts" element={<Nfts/>} />
        <Route path ="/Staking" element={<Stacking/>} />
        <Route path ="/Resources" element={<Resource/>} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/Openapp" element={<Openapp />} />
        
        





</Routes>
</Router>
      <Footer />
   
    
    </div>
  );
}

export default App;
