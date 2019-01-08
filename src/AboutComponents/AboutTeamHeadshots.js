import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect,Circle,Image} from 'react-konva';
import Konva from 'konva';

import Test from './Media/Pictures/Test.png';


export default class Headshots extends React.Component {
  state = {
    color: 'black',
    image: null,
  };

  handleClick = () => {
    const danceImage=new window.Image();
    danceImage.src=this.props.danceIMG;
    danceImage.onload=()=>{
      this.setState({
        color:'green',
        image: danceImage,
      });
    }
  };

/*For images you need to manually create a NEW native window via "new window.Image()" & specify "image src".*/
  componentDidMount() {
    const profImage = new window.Image();
    profImage.src = this.props.profIMG;
    profImage.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: profImage
      });
    }; 
  }

  render() {
    return (
      <Circle
        x={400}
        y={400}
        radius={200}
        fillPatternImage={this.state.image}
        shadowBlur={0}
        stroke={this.state.color}
        image={this.state.image}
        onClick={this.handleClick}
      />
    );
  }
}

