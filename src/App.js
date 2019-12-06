import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import BannerBottom from './Components/BannerBottom/BannerBottom';
import Modals from './Components/BannerBottom/Modals';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div id="React-js">
      <Header/>
      <BannerBottom/>
      <Modals/>
      <Body/>
      <Footer/>
      
    </div>
  );
}

export default App;
