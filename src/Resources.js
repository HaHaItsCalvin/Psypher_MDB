import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';
import ResourceMap from './ResourcesComponents/ResourceMap.js';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-133659922-1');
    ReactGA.pageview('/ResourceMap');
}

class Resources extends React.Component {
  render() {
    console.log('Workshops')
    initializeReactGA();
    return (
      <React.Fragment>
        <NavBar/>
        <main>
          <div >
            <h1 align='center'> Explore Neary Resources </h1>
            <ResourceMap/>
          </div>
          
        </main>
        <FooterNav/>
      </React.Fragment>
    );
  }
}

export default Resources;