import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MDBMask, MDBView } from "mdbreact";
import { Animation } from "mdbreact";

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
    color:'#000000',
  },
});

function HomeWhySection(props) {
  const { classes } = props;
  {/*Start Why Section */}
  return(
      <MDBView className={classes.WhyUnit} >
        <MDBMask className='flex-center' overlay='white-strong' >
        <Animation type="slideInUp" reveal duration="1s">
          <Grid container direction='column' alignItems='center' justify='center' className={classes.WhyBody}>
            <Animation type="slideInUp" reveal duration="1s">
              <Typography variant='h5' className={classes.WhyText}> <b>The average <span style={{color:'#7700cf'}}> delay between </span>  the onset of <span style={{color:'#7700cf'}}>symptoms </span> of mental illness <span style={{color:'#7700cf'}}>and intervention</span> is </b></Typography>
            </Animation>
            <Animation type="slideInUp" reveal delay='0.1s'duration="1s">
              <Animation type="pulse" infinite duration="3s">
                <Typography variant='h2' className={classes.WhyText}> <span style={{color:'#7700cf'}}><b>8-10 YEARS...WHY?</b></span></Typography>
              </Animation>
            </Animation>
            <Animation type="slideInUp" reveal delay='0.2s'duration="1s">
              <Typography variant='h5' className={classes.WhyText}> <b><span style={{color:'#00695f'}}>It's time to innovate and reimagine</span> what mental health resources look like. </b></Typography>              
            </Animation>
            <Animation type="slideInUp" reveal delay='0.3s'duration="1s">
              <Typography variant='h5' className={classes.WhyText}> <b><span style={{color:'#00695f'}}>We can't just react</span> to mental illness. </b></Typography>
            </Animation>
            <Animation type="slideInUp" reveal delay='0.4s'duration="1s">
              <Typography variant='h5' className={classes.WhyText}> <b><span style={{color:'#00695f'}}>We need to be proactive </span>about mental health. </b></Typography>
            </Animation>
          </Grid>
          </Animation>
        </MDBMask>
      </MDBView>
    )
}

HomeWhySection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeWhySection);