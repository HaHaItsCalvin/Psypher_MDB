import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

function HomeVideoSection(props) {
  const { classes } = props;
  return (
        <div>
            <img src={props.img}/>
            <Typography variant='h3' align='center' color='textPrimary'>
              {props.Title}
            </Typography>
            <Typography  align='center' color='textPrimary'>
              {props.Body}
            </Typography>
         </div>
    )
  }

HomeVideoSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeVideoSection);