import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';
import { Col, Container, Row, Footer } from "mdbreact";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main>
        </main>
        <FooterNav/>
        <h1> ABOUT</h1>
      </React.Fragment>
    );
  }
}

export default About;