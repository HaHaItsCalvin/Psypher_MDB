import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

import Headshots from './AboutTeamHeadshots.js';

export default class TeamBios extends React.Component{
	render(){
		return(
			<div>
			<Grid container alignItems='center' justify='center'>
				<h1>Test</h1>
			</Grid>
		     <Stage width={window.innerWidth} height={window.innerHeight}>
		       <Layer>
		         <Text text="Try click on rect" />
		         <Headshots 
		         	profIMG='http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png'
		         	danceIMG='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg'

		         />
		       </Layer>
		     </Stage>
		     </div>
		)
	}
}
