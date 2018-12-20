import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  img:{
    maxHeight:'70px',
    maxWidth:'70px',
    margin:'auto',
    display:'block',
    position:'center,'
  },
  bold:{
    fontSize:11
  }
});

function HomeMediaCards(props) {
  const { classes } = props;
  return (
        <div>
            <img src={props.img} className={classes.img}/>
            <Typography align='center' className={classes.bold} variant='h7'>
              <b>{props.Title}</b>
            </Typography>
            <Typography align='center' style={{color:'#707070'}} >
              {props.Body}
            </Typography>
         </div>   
    )
  }

HomeMediaCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMediaCards);