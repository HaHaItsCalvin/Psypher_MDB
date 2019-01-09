import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import Konva from 'konva';

import Headshots from './AboutTeamHeadshots.js';
import MidRect from './AboutMidRect.js';


//Change this value to determine how large the radius of the circle is, relative to the screen size
const radialDivider=13.5;
export default class TeamBios extends React.Component{
  state = {
    highlightMode: true,
    color:'black',
		         	
  };
  handleClick(){
  	console.log("CLICKED")
  	this.setState({
  		highlightMode:false,
  		color:'green',
   		});
  }
	render(){
		return(
			<div>
			<Grid container alignItems='center' justify='center' style={{paddingTop:'3vh'}}>
				<Typography variant='h3'>Jump In to Psypher</Typography>
			</Grid>
			{/*100 is arbitrarily taken from innerWidth so there's no scroll bar on the bottom*/}
		     <Stage width={window.innerWidth-15} height={window.innerHeight/1.2}>
		       <Layer>
		         {/*Anchor Left*/}
		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/4*0.5}
		         	y={window.innerHeight/9*3.5}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         	color={this.state.color}
		         	strokeWidth={10}
		         	activeIMG={this.state.activeIMG}
		         />

				 {/*Anchor Right*/}
		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/4*3.4}
		         	y={window.innerHeight/9*3.5}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         	color={this.state.color}
		         />

		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/1.7}
		         	y={window.innerHeight/9}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         	color={this.state.color}
		         />

		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/2.6}
		         	y={window.innerHeight/9}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         />

		     	{/*Post Anchors*/}
		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/4*0.75}
		         	y={window.innerHeight/9*2}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         />
		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/4*3.15}
		         	y={window.innerHeight/9*2}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         />
		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/4*0.75}
		         	y={window.innerHeight/9*5}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         />		         


		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/2.6}
		         	y={window.innerHeight/9*6.5}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         />
		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/1.7}
		         	y={window.innerHeight/9*6.5}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         />

		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         	x={window.innerWidth/4*3.15}
		         	y={window.innerHeight/9*5}
		         	radius={window.innerHeight/radialDivider}
		         	onClick={() => this.handleClick()}
		         />
		         {this.state.highlightMode ? 
		         <MidRect
		         	x={window.innerWidth/3.5}
		         	y={window.innerHeight/4}
		         	width={window.innerWidth/12*5}
		         	height={window.innerHeight/3}
		         	opacity={0.6}
		         	profIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         />
		         :
		         <>
		         <MidRect 
		         	x={window.innerWidth/3.5}
		         	y={window.innerHeight/4}
		         	width={window.innerWidth/6}
		         	height={window.innerHeight/3}
		         	opacity={0.8}
		         	profIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'
		         />
		         <MidRect 
		         	x={window.innerWidth/2.2}
		         	y={window.innerHeight/4}
		         	width={window.innerWidth/4}
		         	height={window.innerHeight/3}
		         	opacity={0.8}
		         	fill={'teal'}
		         />
		         </>
		     }
		       </Layer>
		     </Stage>
		     </div>
		)
	}
}
