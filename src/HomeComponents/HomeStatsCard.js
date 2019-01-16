import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from "mdbreact";

const styles = theme => ({
    img:{
    maxHeight:'100%',
    maxWidth:'100%',
    margin:'auto',
    display:'block',
    position:'center,'
  },
});

function HomeStatsCards(props) {
  const { classes } = props;
  return (
        <div>
            <Animation type="flip" reveal delay={props.delay} duration="0.8s">
            <img src={props.img} className={classes.img} alt={props.Title}/>
            </Animation>
            <Animation type="fadeIn" reveal dealy={props.delay} duration="1s">
            <Typography align='center' style={{color:'#C45CE2'}} variant='h6' >
              <b>{props.Title}</b>
            </Typography>
            <Typography align='center' style={{color:'#7f7f7f'}}>
              <b>{props.Body}</b>
            </Typography>
            </Animation>
         </div>   
    )
  }

HomeStatsCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeStatsCards);