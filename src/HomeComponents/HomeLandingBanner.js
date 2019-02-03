import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Animation } from "mdbreact";


import colorExplosion from './Media/Videos/colorExplosion.mp4';
import BackgroundPsypher from './Media/Pictures/Psypher.png';

const styles = ({
  topVidContainer:{
    width:'100%',
    height:'80vh',
    backgroundColor:'black',
},
  topIMGContainer:{
  	width:'100%',
    height:'80vh',
    backgroundColor:'teal',
},
  topPsypherPic:{
    backgroundImage: `url(${BackgroundPsypher})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    height:"35vh",
    width:'100%',
    backgroundPosition:'top',
    position:'absolute',
  },
});

export default class HomeLandingBanner extends React.Component{
	constructor(props){
		super(props);
		this.state={
			vidPlaying:true,
		};
	}
	changeThis(){
		 console.log("Ended");
		 this.setState({
		 	vidPlaying:false,
		 });
	}
	render(){
		return(
		    <Grid container direction='column' justify="center" alignItems="center" xs={12} sm={12} med={12}> 
		    	
			{this.state.vidPlaying ? 
		    	<video muted style={styles.topVidContainer} autoPlay onEnded={this.changeThis.bind(this)}>
		          <source src={colorExplosion} type='video/mp4' /> 
		      	</video>
		      	:
		      	<Grid item  xs={12} sm={12} med={12} style={styles.topIMGContainer}>
		      		<h1>/HHH</h1>
		      	</Grid>
		    }
		        <Animation type="fadeIn" delay='.9s'duration="6s" style={styles.topPsypherPic}></Animation>
		    </Grid>

	    	)
	}
}