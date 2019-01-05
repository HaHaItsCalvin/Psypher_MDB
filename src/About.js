import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';

import ResourceMap from './ResourceMap.js';

const styles = theme => ({
  aboutUnit:{

  },
});

class About extends React.Component {
  render() {
    console.log('ABOUT')
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
        <h1> ABOUT</h1>
      </React.Fragment>
    );
  }
}

export default About;