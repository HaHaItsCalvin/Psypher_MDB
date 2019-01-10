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
            <h1 align='center'> Test Map </h1>
            <ResourceMap/>
          </div>
        </main>
        <FooterNav/>
        <h1> WORKSHOPS</h1>
      </React.Fragment>
    );
  }
}

export default Resources;