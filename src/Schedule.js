import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-133659922-1');
    ReactGA.pageview('/Schedule');
}

class Schedule extends React.Component {
  render() {
    console.log('Workshops');
    initializeReactGA();
    return (
      <React.Fragment>
        <NavBar/>
        <main>
        <h1> Upcoming Workshops </h1>
        <iframe title="Schedule of Psypher's Events" src="https://calendar.google.com/calendar/embed?src=dq5ijg954teo1vek6vpifso41c%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: "0", width:"100%", height:"80vh", frameborder:"0", scrolling:"no"}}>
         </iframe>
        </main>
        <FooterNav/>
        <h1> WORKSHOPS</h1>
      </React.Fragment>
    );
  }
}

export default Schedule;