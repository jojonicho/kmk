import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer'
import DivisiContainer from './DivisiContainer'
import GaleriContainer from './GaleriContainer'
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={HomeContainer} />
        <Route path='/divisi' component={DivisiContainer} />
        <Route path='/galeri' component={GaleriContainer} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
