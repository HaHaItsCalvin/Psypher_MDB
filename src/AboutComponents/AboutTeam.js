import React from 'react';
import { Stage, Layer, Text} from 'react-konva';
import { Spring } from 'react-spring';

import Headshots from './AboutTeamHeadshots.js';
import MidRect from './AboutMidRect.js';

import CanvasBackground from './Media/Pictures/Test.png';

const CanvasUnit={
	paddingTop:'5vh',
    backgroundImage: `url(${CanvasBackground})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
};


//Change this value to determine how large the radius of the circle is, relative to the screen size
const radialDivider=12.5;
//const offsetToEliminateScrollBar --> Find where <Stage> is defined & change the offset for window.innerWidth

const headshotData=[
	//xScaler affects the horizontal
	//yScaler affects the vertical
	{
		id:'0',
		profIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Liam_Neeson_Deauville_2012_2.jpg/220px-Liam_Neeson_Deauville_2012_2.jpg',
     	danceIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	xScaler:'0.125', 
     	yScaler:'0.388', 
     	strokeWidth:'9',
     	fill:'teal',
     	text:'Media Director - Noelle Funtanilla',
	},
	{
		id:'1',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'.1875',	
     	yScaler:'.222',	
     	strokeWidth:'9',
     	text:'Project Manager - Grace Park',
	},
	{
		id:'2',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.386',	
     	yScaler:'0.111',	
     	strokeWidth:'9',
     	text:'Web & Data Engineer - Calvin Ha',
	},
	{
		id:'3',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.588',	
     	yScaler:'0.111',	
     	strokeWidth:'9',
     	text:'Social Media Coordinator - Ryan Tang',
	},
	{
		id:'4',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.788',	
     	yScaler:'0.222',	
     	strokeWidth:'9',
     	text:'Community Outreach - Ludwig Ompad',
	},
	{
		id:'5',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.85',
     	yScaler:'0.388',	
     	strokeWidth:'9',
     	text:'Intern - Alyssa Bernal',
	},
	{
		id:'6',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.7875',	
     	yScaler:'0.556',	
     	strokeWidth:'9',
     	text:'6',
	},
	{
		id:'7',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.588',	
     	yScaler:'0.722',	
     	strokeWidth:'9',
     	text:'7',
	},
	{
		id:'8',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.385',	
     	yScaler:'0.722',	
     	strokeWidth:'9',
     	text:'8',
	},
	{
		id:'9',
		profIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.188',	
     	yScaler:'0.556',	
     	strokeWidth:'9',
     	text:'Lian Neeson; Friendly Neighborhood Special Agent, Stalker, and Badass Father; I will find you & I Will kill you'
	},
];

export default class TeamBios extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			highlightMode: true,
			headShotsColor: Array(10).fill('black'),
			headShotsSprung:Array(10).fill(false),
			activeHeadshot: null,
			rectIMG:'https://upload.wikimedia.org/wikipedia/commons/5/58/Liam_Neeson_TIFF_2008.jpg',
		};
	}

	//handles state transitions whenever a headShot Profile is clicked
	handleClick(i,arrayData){
	  	if (this.state.activeHeadshot!==i){
		  	console.log("CLICKED HEADSHOT")
		  	console.log(i)
		  	console.log("ACTIVE HEADSHOT WAS:")
		  	console.log(this.state.activeHeadshot)
		  	console.log(arrayData[i].danceIMG)

	  		const headShotsColor=this.state.headShotsColor.slice();
	  		const headShotsSprung=this.state.headShotsSprung.slice();
	  		headShotsColor[i]='teal'
	  		headShotsSprung[i]=!headShotsSprung[i]
	  		if (this.state.activeHeadshot!==null)
	  			headShotsColor[this.state.activeHeadshot]='black'
	  			headShotsSprung[this.state.activeHeadshot]=false
		  		this.setState({
		  			highlightMode:false,
		  			headShotsColor:headShotsColor,
		  			headShotsSprung:headShotsSprung, 
		  			activeHeadshot:i,
		  			rectIMG: arrayData[i].danceIMG,
		  		});

		  	console.log(this.state.headShotsSprung)
		  }
	}

	//function that renders the headShots upon loading of webpage
	renderHeadshot(indexNum,arrayData){
		return(
			<Headshots
	         	profIMG={arrayData[indexNum].profIMG}
	         	danceIMG={arrayData[indexNum].danceIMG}
	         	x={window.innerWidth*arrayData[indexNum].xScaler}
	         	y={window.innerHeight*arrayData[indexNum].yScaler}
	         	onClick={() => this.handleClick(indexNum,arrayData)}
	         	strokeWidth={arrayData[indexNum].strokeWidth}
		        fill={arrayData[indexNum].fill}
	         	color={this.state.headShotsColor[indexNum]}
		        isActive={this.state.headShotsSprung[indexNum]}
	         	radius={window.innerHeight/radialDivider}
	         	fillPatternScaleX={0.25}
		        fillPatternScaleY={0.2}
		        fillPatternRepeat={'no-repeat'}
			/>
			)
	}

	//function that renders the text for the clicked Headshot within the center rectangle
	renderText(indexNum,arrayData){
		return(
			<Spring
			from={{opacity:0}}
			to={{opacity:1}}
			>
			{props =>(
				<Text
					{...props}
					x={window.innerWidth/2.2}
		         	y={window.innerHeight/4}
		         	width={window.innerWidth/4}
		         	height={window.innerHeight/3}
		         	text={arrayData[indexNum].text}
		         	fontSize={30}
		         	fontFamily='sans-seriff'
		         	fill={'black'}
				/>
			)}
			</Spring>
		)
	}

	render(){
		return(
			<div style={CanvasUnit}>
			{/*100 is arbitrarily taken from innerWidth so there's no scroll bar on the bottom*/}
		     <Stage width={window.innerWidth-20} height={window.innerHeight/1.2}>
		       <Layer>
		       	 {/*Constructed starting with zero on the 9 O'clock position & going clockwise*/}

		         {/*Anchor Left is 0*/}
		         {this.renderHeadshot(0,headshotData)}
		         {this.renderHeadshot(1,headshotData)}
		         {this.renderHeadshot(2,headshotData)}
		         {this.renderHeadshot(3,headshotData)}
		         {this.renderHeadshot(4,headshotData)}
				 {/*Anchor Right is 5*/}
				 {this.renderHeadshot(5,headshotData)}
				 {this.renderHeadshot(6,headshotData)}
				 {this.renderHeadshot(7,headshotData)}
				 {this.renderHeadshot(8,headshotData)}
				 {this.renderHeadshot(9,headshotData)}

		         {this.state.highlightMode ? 
		         <MidRect
		         	x={window.innerWidth/3.5}
		         	y={window.innerHeight/4}
		         	width={window.innerWidth/12*5}
		         	height={window.innerHeight/3}
		         	opacity={0.6}
		         	profIMG={this.state.rectIMG}
		         	fillPatternScaleX={0.25}
			        fillPatternScaleY={0.2}
			        fillPatternRepeat={'no-repeat'}
		         />
		         :
		         <>
			         <MidRect 
			         	x={window.innerWidth/2.2}
			         	y={window.innerHeight/4}
			         	width={window.innerWidth/4}
			         	height={window.innerHeight/3}
			         	opacity={0.5}
			         	fill={'teal'}
			         />
			         {this.renderText(this.state.activeHeadshot,headshotData)}
		         </>
		     }
		       </Layer>
		     </Stage>
		     </div>
		)
	}
}
