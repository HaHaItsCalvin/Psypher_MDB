import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { MDBMask, MDBView,MDBBtn } from "mdbreact";
const img={
	maxHeight:'100%',
	maxWidth:'100%',
	margin:'auto',
  position:'relative',
};

const textBlock={
  position: 'absolute',
  top:'16px',
  left:'20px',
  right:'20px',
};
const Header={
  color:'white',
  lineHeight: '24px',
};
const text={
  color:'white',
  lineHeight: '17.5px',
  textAlign:'left',
};

const button={
  paddingTop:'10px',
};

const buttonText={
  color:'white',
};

class HomeMissionPics extends React.Component {
  constructor(props){
    super(props);
    this.state={
      overlay:'none',
      showClickable: false,
    };
  }


  handleMouseOver(){
      this.setState({
        showClickable: true,
      })
  }

  handleMouseLeave(){
    this.setState({
      showClickable: false,
    })
  }

  render(){
    return (
      <div 
        style={img} 
        onMouseOver={()=>this.handleMouseOver()} 
        onMouseLeave={()=>this.handleMouseLeave()}
      >
        <MDBView > 
          <img style={img} src={this.props.img} alt={this.props.info}/>
        <MDBMask overlay={ this.state.showClickable ? 'black-strong' : 'none'  }/>
        </MDBView>
        <div style={textBlock}>
            <Typography variant='h6' style={Header}>
              {this.state.showClickable ? this.props.header : null} 
            </Typography>
            <Typography variant='h7' style={text}> 
                 {this.state.showClickable ? this.props.info : null} 
            </Typography>
            <div style={button}>
                  {this.state.showClickable ? <a href={this.props.link} target="_blank" rel='noopener noreferrer'> <MDBBtn color='btn aqua-gradient waves-effect' style={buttonText}> VIDEO </MDBBtn> </a>: null} 
            </div>
       	</div>
      </div>
    )
  }
}
HomeMissionPics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default HomeMissionPics;