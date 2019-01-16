import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from "mdbreact";
const styles = theme => ({
  img:{
    maxHeight:'70px',
    maxWidth:'70px',
    margin:'auto',
    display:'block',
    position:'center,'
  },
  bold:{
  }
});

function HomeMediaCards(props) {
  const { classes } = props;
  return (

        <div>
            <Animation type="fadeIn" reveal delay={props.delay} duration="0.8s">
            <a href={props.link} target="_blank" rel='noopener noreferrer'> 
              <img  src={props.img} className={classes.img} alt={props.Title}/> 
            </a>
            <Typography align='center' className={classes.bold} variant='h6'>
              <b>{props.Title}</b>
            </Typography>
            <Typography align='center' style={{color:'#707070'}} >
              {props.Body}
            </Typography>
         </Animation>
         </div>   
         
    )
  }

HomeMediaCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMediaCards);