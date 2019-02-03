import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';
import ResourceMap from './ResourcesComponents/ResourceMap.js';

class Resources extends React.Component {
  render() {
    console.log('Workshops')
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