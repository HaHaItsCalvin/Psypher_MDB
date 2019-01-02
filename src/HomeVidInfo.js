import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {MDBBtn} from 'mdbreact';


class HomeVidInfo extends Component {
	render(){
		return(
			<Grid container direction="column" alignItems='flex-start' justify='flex-start'>
				<Typography variant="h4" style={{color:'white'}}>
					{this.props.header}
				</Typography> 
				<Typography variant="h6" style={{paddingTop:'2vh',paddingBottom:'2vh', color:'white'}}>
					{this.props.info}
				</Typography>
			</Grid>
		);
	}
}

export default HomeVidInfo;