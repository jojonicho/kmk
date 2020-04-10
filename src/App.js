import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer'
import DivisiContainer from './DivisiContainer'
import GaleriContainer from './GaleriContainer'
import Footer from './components/footer/Footer';
import { AppContainer } from './style.js'

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Navbar color="white">
        <Route exact path='/' component={HomeContainer} />
        <Route path='/divisi' component={DivisiContainer} />
        <Route path='/galeri' component={GaleriContainer} />
        <Footer />
        </Navbar>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
