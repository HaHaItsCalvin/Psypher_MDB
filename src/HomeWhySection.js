import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MDBMask, MDBView, MDBContainer } from "mdbreact";

import WhyClockPic from './WhyClockPic.jpg';
const styles = theme => ({
  WhyUnit:{
    backgroundImage: `url(${WhyClockPic})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    width:'100%',
    height:'80vh',
    backgroundPosition:'center',
    zIndex:"-1",
    backgroundPosition:'center',
    backgroundAttachment:'fixed',
    opacity:0.85
  },
  WhyText:{
    paddingLeft:'10vh',
    paddingRight:'10vh',
    paddingBottom:'5vh',
    color:'#7700cf',
  },
  WhyHighlights:{
    color:'#2e004f',
  }
});

function HomeWhySection(props) {
  const { classes } = props;
  {/*Start Why Section */}
  return(
      <MDBView className={classes.WhyUnit} >
        <MDBMask className='flex-center' overlay='white-strong' >
          <Grid container direction='column' alignItems='center' justify='center' className={classes.WhyBody}>
            <Typography variant='h5' className={classes.WhyText}> <b>Despite all this, the average delay between the onset of symptoms of mental illness and intervention is </b></Typography>
            <Typography variant='h2' className={classes.WhyText}> <b>8-10 <span style={{color:'black'}}> YEARS...</span>WHY?</b></Typography>
            <Typography variant='h5' className={classes.WhyText}> <b>It's time to <span style={{color:'#2e004f'}}>innovate</span> and <span style={{color:'#2e004f'}}>reimagine</span> what mental health resources look like. </b></Typography>              
            <Typography variant='h5' className={classes.WhyText}> <b><span style={{color:'#2e004f'}}>We can't just react</span> to mental illness. </b></Typography>
            <Typography variant='h5' className={classes.WhyText}> <b><span style={{color:'#2e004f'}}>We need to be proactive </span>about mental health. </b></Typography>
          </Grid>
        </MDBMask>
      </MDBView>
    )
}

HomeWhySection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeWhySection);