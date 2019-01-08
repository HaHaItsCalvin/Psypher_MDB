import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';

class Schedule extends React.Component {
  render() {
    console.log('Workshops')
    return (
      <React.Fragment>
        <NavBar/>
        <main>
        </main>
        <FooterNav/>
        <h1> WORKSHOPS</h1>
      </React.Fragment>
    );
  }
}

export default Schedule;