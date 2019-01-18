import React from 'react';
import { Circle} from 'react-konva';
import { Spring } from 'react-spring';

export default class HeadshotsKonva extends React.Component {
  constructor(props){
    super(props);
      this.state={
        image: null,
      };
    }

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
    <Spring
      from={{x:this.props.x, y:this.props.y,radius:this.props.radius}}
      to={{
        x:this.props.isActive ? window.innerWidth*0.33 : this.props.x,
        y:this.props.isActive ? window.innerHeight*0.388 : this.props.y,
        radius: this.props.isActive ? this.props.radius*window.innerWidth/550 : this.props.radius,
        shadowBlur: this.props.isActive ? 25 : 5,
        fillPatternScaleX:this.props.isActive ? this.props.fillPatternScaleX * 2 : this.props.fillPatternScaleX,
        fillPatternScaleY:this.props.isActive ? this.props.fillPatternScaleY * 2 : this.props.fillPatternScaleY,
      }}
    >
      {props => (
        <Circle
          {...props}
          fillPatternImage={this.state.image}
          fillPatternRepeat={this.props.fillPatternRepeat}
          fillPatternOffset={{x:400,y:300}}
          shadowBlur={this.props.shadowBlur}
          stroke={this.props.color}
          strokeWidth={this.props.strokeWidth}
          onClick={() => this.props.onClick()}
        />
      )}
    </Spring>
    );
  }
}