import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  img:{
  	maxHeight:'100%',
  	maxWidth:'100%',
  	margin:'auto',
  	display:'block',
  	position:'center,'
  },
});
function HomeMissionCards(props) {
  const { classes } = props;
  return (
      <Grid container direction='column ' alignItems='center' justify='center'> 
     	  <Grid item>
        <img src={props.img} className={classes.img} alt={props.phrase}/>
        <Typography align='center' color='primary'>
             <b>{props.keyword}</b>
		     </Typography>
         <Typography align='center' color='secondary'>
				     <b>{props.phrase} {props.botPhrase}</b>
		     </Typography>
         </Grid> 
		  </Grid>
    )
  }

HomeMissionCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMissionCards);
