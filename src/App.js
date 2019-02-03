import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './HomePage';
import About from './About';
import Partners from './Partners';
import Workshops from './Workshops';
import Schedule from './Schedule';
import Resources from './Resources';



class App extends Component {
  render() {
    console.log('start')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
    return (
    <Router>
      <div >            
          <Route exact path= {process.env.PUBLIC_URL+'/'} component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Partners" component={Partners} />
          <Route path="/Workshops" component={Workshops} />
          <Route path="/Schedule" component={Schedule} />
          <Route path="/Resources" component={Resources} />
      </div>
    </Router>
    )
  }
}

export default App