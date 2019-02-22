import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-133659922-1');
    ReactGA.pageview('/PastWorkshops');
}

class PastWorkshops extends React.Component {
  render() {
    console.log('PastWorkshops')
    initializeReactGA();
    return (
      <React.Fragment>
        <NavBar/>
        <main>
      
        </main>
        <FooterNav/>
      </React.Fragment>
    );
  }
}

export default PastWorkshops;