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
        <iframe title="Schedule of Psypher's Events" src="https://calendar.google.com/calendar/embed?src=calvin.ha%40nuorder.com&ctz=America%2FLos_Angeles" style={{border: "0", width:"100%", height:"80vh", frameborder:"0", scrolling:"no"}}>
        </iframe>
        </main>
        <FooterNav/>
        <h1> WORKSHOPS</h1>
      </React.Fragment>
    );
  }
}

export default Schedule;