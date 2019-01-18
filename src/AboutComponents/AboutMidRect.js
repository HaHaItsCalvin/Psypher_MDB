import React from 'react';
import { Rect} from 'react-konva';




export default class MidRect extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    color: 'black',
    image: null,
  };
}

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
  //Necessary to trigger re-render when the IMG Props passed to 
  //this rectangle is updated due to a clicked Headshot
  componentDidUpdate(){
    const danceIMG = new window.Image();
    danceIMG.src = this.props.profIMG;
    danceIMG.onload = () => {
      this.setState({
        image: danceIMG
      });
    }; 
  }

  render() {
    return (
        <Rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        opacity={this.props.opacity}
        fillPatternImage={this.state.image}
        fillPatternScaleX={this.props.fillPatternScaleX}
        fillPatternScaleY={this.props.fillPatternScaleY}
        fillPatternRepeat={this.props.fillPatternRepeat}
        fill={this.props.fill}
      />
    );
  }
}

