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
		profIMG:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/49375898_2215758735329558_9127895373426196480_n.jpg?_nc_cat=109&_nc_ht=scontent-lax3-1.xx&oh=3a76b6e77d42aa8b8750e06cf050bb96&oe=5CCF0859',
     	danceIMG:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/49375898_2215758735329558_9127895373426196480_n.jpg?_nc_cat=109&_nc_ht=scontent-lax3-1.xx&oh=3a76b6e77d42aa8b8750e06cf050bb96&oe=5CCF0859',
     	xScaler:'0.125', 
     	yScaler:'0.388', 
     	strokeWidth:'9',
     	fill:'teal',
     	name:'Noelle Funtanilla',
     	title:'Media Director',
     	quote:'Quote Here',
	},
	{
		id:'1',
		profIMG:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/39588898_10212571339586407_8985382564634034176_o.jpg?_nc_cat=105&_nc_ht=scontent-lax3-1.xx&oh=ec977241ed1254a83125039131cd1f62&oe=5CB8F303',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'.1875',	
     	yScaler:'.222',	
     	strokeWidth:'9',
     	name:'Matthew Diep',
     	title:'Founder',
     	quote:'Quote Here',
	},
	{
		id:'2',
		profIMG:'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/30171796_2313199325360565_6318129777791011645_o.jpg?_nc_cat=103&_nc_ht=scontent-lax3-1.xx&oh=a9f4d85094d8c2fa6184f0b4e27e3aa4&oe=5CFECFC2',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.386',	
     	yScaler:'0.111',	
     	strokeWidth:'9',
     	name:'Calvin Ha',
     	title:'Web & Data Engineer',
     	quote:'Quote Here',
	},
	{
		id:'3',
		profIMG:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/29186213_10215573524116197_387254132810973184_n.jpg?_nc_cat=109&_nc_ht=scontent-lax3-1.xx&oh=5f11ec704faa2a1681565c34ec2de398&oe=5CD01C45',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.588',	
     	yScaler:'0.111',	
     	strokeWidth:'9',
     	text:'Social Media Coordinator - Ryan Tang',
     	name:'Ryan Tang',
     	title:'Social Media Coordinator',
     	quote:'',
	},
	{
		id:'4',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.788',	
     	yScaler:'0.222',	
     	strokeWidth:'9',
     	text:'Community Outreach - Ludwig Ompad',
     	name:'Ludwig Ompad',
     	title:'Community Outreach',
     	quote:'',
	},
	{
		id:'5',
		profIMG:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/44407263_10212818219116707_871164163861250048_n.jpg?_nc_cat=100&_nc_ht=scontent-lax3-1.xx&oh=ee59fe3adab3d18ea513cbcffca8f581&oe=5CCD85A5',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.85',
     	yScaler:'0.388',	
     	strokeWidth:'9',
     	name:'Grace Park',
     	title:'Project Manager',
     	quote:'',
	},
	{
		id:'6',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.7875',	
     	yScaler:'0.556',	
     	strokeWidth:'9',
     	name:'Alyssa Bernal',
     	title:'Intern',
     	quote:'',
	},
	{
		id:'7',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.588',	
     	yScaler:'0.722',	
     	strokeWidth:'9',
     	name:'Name',
     	title:'Title ',
     	quote:'Quote',
	},
	{
		id:'8',
		profIMG:'http://www.lukebrasel.com/wp-content/uploads/2016/06/Luke-Brasel-headshot-circle.png',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.385',	
     	yScaler:'0.722',	
     	strokeWidth:'9',
     	name:'',
     	title:'',
     	quote:'',
	},
	{
		id:'9',
		profIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	danceIMG:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Liam_Neeson_TIFF_2008.jpg/170px-Liam_Neeson_TIFF_2008.jpg',
     	xScaler:'0.188',	
     	yScaler:'0.556',	
     	strokeWidth:'9',
     	name:'',
     	title:'',
     	quote:'',
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
			<>
				<Text
					x={window.innerWidth/2.2}
		         	y={window.innerHeight/3.8}
		         	width={window.innerWidth/4}
		         	height={window.innerHeight/3}
		         	text={arrayData[indexNum].name}
		         	fontSize={40}
		         	fontFamily='sans-seriff'
		         	fill={'black'}
		         	align={'center'}
				/>
				<Text
					x={window.innerWidth/2.15}
		         	y={window.innerHeight/2.9}
		         	width={window.innerWidth/4}
		         	height={window.innerHeight/6}
		         	text={arrayData[indexNum].title}
		         	fontSize={30}
		         	fontFamily='sans-seriff'
		         	fill={'black'}
				/>
				<Text
					x={window.innerWidth/2.15}
		         	y={window.innerHeight/2.5}
		         	width={window.innerWidth/4}
		         	height={window.innerHeight/6}
		         	text={arrayData[indexNum].quote}
		         	fontSize={23}
		         	fontFamily='sans-seriff'
		         	fill={'black'}
				/>
			</>
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
		         <>
			         <MidRect
			         	x={window.innerWidth/3}
			         	y={window.innerHeight/4}
			         	width={window.innerWidth/3}
			         	height={window.innerHeight/3}
			         	opacity={0.6}
			         	fill={'teal'}
			         />
			         <Text
						x={window.innerWidth/3}
			         	y={window.innerHeight/3}
			         	width={window.innerWidth/3}
			         	height={window.innerHeight/3}
			         	align={'center'}
			         	text={"Jump In To Psypher! Click on a Headshot"}
			         	fontSize={45}
			         	fontFamily='sans-seriff'
			         	fill={'black'}
					/>
				</>
		         :
		         <>
		         <Spring
					from={{opacity:0}}
					to={{opacity:1}}
					>
					{props =>(
			         <MidRect 
			         	{...props}
			         	x={window.innerWidth/2.2}
			         	y={window.innerHeight/4}
			         	width={window.innerWidth/4}
			         	height={window.innerHeight/3}
			         	opacity={0.5}
			         	fill={'teal'}
			         />
			         )}
			         </Spring>
			         {this.renderText(this.state.activeHeadshot,headshotData)}
		         </>
		     }
		       </Layer>
		     </Stage>
		     </div>
		)
	}
}
