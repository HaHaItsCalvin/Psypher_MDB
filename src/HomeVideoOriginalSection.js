import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HomeVidInfo from './HomeVidInfo.js';
import HomeVidPlayer from './HomeVidPlayer.js';
import {MDBBtn} from 'mdbreact';

import StigmasWorkshop from "./StigmasAtEDS.jpg";
import StigmasTestimonial from "./StigmasTestimonial.jpg";
import Glendale from "./Glendale.jpg";
import HSTestimonial from "./HSTestimonial.jpg";
import DanyelTestimonial from "./DanyelTestimonial.jpg";

import StigmasVid from './StigmasVid.mp4';
import StigmasTestimonialVid from './StigmasTestimonialVid.mp4';
import GlendaleVid from './GlendaleVid.mp4';
import HSTestimonialVid from "./HSTestimonialVid.mp4";
import DanyelTestimonialVid from "./DanyelTestimonialVid.mp4";

const videoData=[
  {
    id: '1',
    img: StigmasWorkshop,
    overlay:'black-light',
    header:'Mental Health Stigma Workshop at Elements Dance Space',
    text:'test',
    link:'https://www.youtube.com/watch?v=N6HATuCctXc',
    video: StigmasVid, 
    vidType:'video/mp4',
  },  
  {
    id: '2',
    img: StigmasTestimonial,
    overlay:'black-light',
    header:'Stigma Workshop Testimonial ',
    text:'test',
    link:'https://www.youtube.com/watch?v=ELVJ0K6Bdzo',
    video:StigmasTestimonialVid,
    vidType:'video/mp4',
  },
  {
    id: '3',
    img: Glendale,
    overlay:'black-light',
    header:'Social Media and Mental Health Workshop at Glendale High School',
    text:'test',
    link:'https://www.youtube.com/watch?v=UccGUpHq1nU&t=1s',
    video:GlendaleVid,
    vidType:'video/mp4',
  }, 
  {
    id: '4',
    img: HSTestimonial,
    overlay:'black-light',
    header:'See what high school students thought of our workshop!',
    text:'test',
    link:'https://www.youtube.com/watch?v=aXH86f3zAmk',
    video:HSTestimonialVid,
    vidType:'video/mp4',
  }, {
    id: '5',
    img: DanyelTestimonial,
    overlay:'black-light',
    header:'Hear about Danyel Moulton’s experience of teaching with us!',
    text:'test',
    link:'https://www.youtube.com/watch?v=ukisZIix9dY',
    video:DanyelTestimonialVid,
    vidType:'video/mp4',
  },
];

class HomeVidSection extends Component {
	constructor(props){
    super(props);
    this.state={
      highlightMode:true,
    }
  }
	handleClick(){
		console.log(videoData.length)
		this.setState({
			highlightMode: false,
		});
	}
	render(){
		return(
			<Grid
			  container
			  direction="row"
			  justify="center"
			  alignItems="center"
			  style={{backgroundColor:'pink'}}
			>
				<Grid 
					item xs={1} sm={1} med={1} lg={1} xl={1} alignItems='center' justify='center' 
					style={{backgroundColor:'red'}}
				>	
					<Typography align='center'> TESTING CAROUSEL </Typography>
				</Grid>
				
				<Grid item xs={11} sm={5} med={5} lg={5} xl={5} direction ='column' style={{backgroundColor:'blue', paddingLeft:'10vh', paddingTop:'5vh', paddingBottom:'5vh'}}>
					<HomeVidInfo 
						header="Header"
						info={this.state.highlightMode ? "Some basic info about the video" : "Some basic info about the video"}

					/>
					{this.state.highlightMode ? <MDBBtn onClick={()=>this.handleClick()} color='purple'> Play </MDBBtn> 
												: <MDBBtn color='purple'> Learn More </MDBBtn>}
				</Grid>

				<Grid item xs={11} sm={5} med={5} lg={5} xl={5} alignItems='center' justify='center' style={{backgroundColor:'yellow', paddingTop:'5vh', paddingBottom:'5vh'}}>
					{this.state.highlightMode ? 
						<HomeVidPlayer
							overlay='green-strong'
							vidType='video/mp4'
							video={GlendaleVid}
						/>
						:
						<iframe width="100%" height="460" src="https://www.youtube.com/embed/ELVJ0K6Bdzo?&autoplay=1" 
						frameborder="0" allow="accelerometer; encrypted-media; gyroscope; 
						picture-in-picture" allowfullscreen></iframe>
					}

				</Grid>				

				<Grid item xs={1} sm={1} med={1} lg={1} xl={1} alignItems='center' justify='center' style={{backgroundColor:'red'}}>
					<Typography align='center'> TESTING CAROUSEL </Typography>
				</Grid>

			</Grid>
		);
	}
}

export default HomeVidSection;