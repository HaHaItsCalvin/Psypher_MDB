import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';
import { Col, Container, Row, Footer } from "mdbreact";

class Partners extends React.Component {
  render() {
    console.log('Partners')
    return (
      <React.Fragment>
        <NavBar/>
        <main>
        </main>
        <FooterNav/>
        <h1> PARTNERS</h1>
      </React.Fragment>
    );
  }
}

export default Partners;