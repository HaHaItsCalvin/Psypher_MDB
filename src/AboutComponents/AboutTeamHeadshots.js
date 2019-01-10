import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect,Circle,Image} from 'react-konva';
import Konva from 'konva';

import Test from './Media/Pictures/Test.png';



export default class HeadshotsKonva extends React.Component {
  state = {
    color: 'black',
    image: null,
  };


/*For images you need to manually create a NEW native window via "new window.Image()" & specify "image src".*/
  componentDidMount() {
    const activeImage = new window.Image();
    activeImage.src = this.props.profIMG;
    activeImage.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: activeImage
      });
    }; 
  }

  render() {
    return (
      <Circle
        x={this.props.x}
        y={this.props.y}
        radius={this.props.radius}
        fillPatternImage={this.state.image}
        fillPatternScaleX={this.props.fillPatternScaleX}
        fillPatternScaleY={this.props.fillPatternScaleY}
        fillPatternRepeat={this.props.fillPatternRepeat}
        shadowBlur={this.props.shadowBlur}
        stroke={this.props.color}
        strokeWidth={this.props.strokeWidth}
        onClick={() => this.props.onClick()}
      />
    );
  }
}

