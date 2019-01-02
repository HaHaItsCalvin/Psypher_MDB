import React, { Component } from "react";
import {MDBBtn, View,Mask} from 'mdbreact';

import StigmasTestimonialVid from './StigmasTestimonialVid.mp4';


const vid={
}

class HomeVidPlayer extends Component {
	render(){
		return(
			<View>
            	<video controls muted className="video-fluid d-block" style={vid} autoPlay loop>
                	<source src={this.props.video} type={this.props.vidType} />
             	</video>
              <Mask overlay={this.props.overlay}/>
            </View>
		);
	}
}

export default HomeVidPlayer;