import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import HomeVidInfo from './HomeVidInfo.js';
import HomeVidPlayer from './HomeVidPlayer.js';
import {MDBBtn} from 'mdbreact';
import {Animation} from 'mdbreact';

class HomeVidSection extends Component {
	constructor(props){
    super(props);
    this.state={
      highlightMode:true,
    }
  }

	handleClick(){
		this.setState({
			highlightMode: false,
		});
	}
	render(){
		return(
			<Grid
			  container
			  direction="row"
			  justify="flex-end"
			  alignItems="center"
			  style={{backgroundColor:'#14a37f', height:'58vh'}}
			>
				
				<Grid item xs={11} sm={5} med={5} lg={5} xl={5}  direction ='column' style={{paddingBottom:'15vh'}}>
					<HomeVidInfo 
						header={this.props.header}
						info={this.props.info}
					/>
					{this.state.highlightMode ? <MDBBtn onClick={()=>this.handleClick()} color='btn aqua-gradient waves-effect'> Play Video </MDBBtn> 
												: <MDBBtn color='btn purple-gradient waves-effect' > Learn More </MDBBtn>}
				</Grid>

				<Grid item xs={11} sm={6} med={6} lg={6} xl={6}>
					{this.state.highlightMode ? 
						<HomeVidPlayer
							overlay={this.props.overlay}
							vidType={this.props.vidType}
							video={this.props.highlightVideo}
						/>
						:
						<Animation type="fadeIn" delay='0s'duration="1s">
							<video controls unmuted className="video-fluid d-block" autoPlay>
          					  <source src={this.props.fullVideo} type={this.props.vidType} />
              				</video>
              			</Animation>
					}

				</Grid>				

			</Grid>
		);
	}
}

export default HomeVidSection;