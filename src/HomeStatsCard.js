import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
            <img src={props.img} className={classes.img}/>
            <Typography align='center' style={{color:'#C45CE2'}} variant='h6' >
              <b>{props.Title}</b>
            </Typography>
            <Typography align='center' style={{color:'#7f7f7f'}}>
              <b>{props.Body}</b>
            </Typography>
         </div>   
    )
  }

HomeStatsCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeStatsCards);