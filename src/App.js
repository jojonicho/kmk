import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import DivisiContainer from './DivisiContainer';
import GaleriContainer from './GaleriContainer';
// import {ThemeProvider} from 'styled-components'
// import {theme} from './theme'
import { AppContainer } from './style'

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
    {/* <ThemeProvider theme={theme}> */}
        <AppContainer>
          <Navbar open={open} setOpen={setOpen} />
            <Route exact path='/' component={HomeContainer} />
            <Route path='/divisi' component={DivisiContainer} />
            <Route path='/galeri' component={GaleriContainer} />
            <Footer />
        </AppContainer>
        {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
