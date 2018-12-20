import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  img:{
  	maxHeight:'100%',
  	maxWidth:'100%',
  	margin:'auto',
  	display:'block',
  },
});

function HomeMissionPics(props) {
  const { classes } = props;
  return (
       	<div> 
       		<img className={classes.img} src={props.img}/>
			<Typography align='center' color='textPrimary'>
				{props.Quote}
			</Typography>
			<Typography component='h1' variant='b2' align='right' color='textPrimary'>
				{props.Source}
			</Typography>
			<Typography component='h1'  align='right' color='textPrimary'>
				{props.Background}
			</Typography>
		</div>
    )
  }

HomeMissionPics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMissionPics);
