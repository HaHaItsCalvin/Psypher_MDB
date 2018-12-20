import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#212121',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9900ff',
      contrastText: '#000',
    },
  },
});
function HomeMissionCards(props) {
  const { classes } = props;
  return (
       	<Grid container direction='column ' alignItems='center' justify='center'> 
       	  <Grid item>
          <img src={props.img} className={classes.img}/>
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
