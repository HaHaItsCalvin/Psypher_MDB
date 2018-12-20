import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
    marginBottom: theme.spacing.unit*8,
  },
});


const footers = [
  {
    title: 'About',
    description: ['Team', 'History', 'Contact Us'],
  },
  
  {
    title: 'Social Media',
    description: ['YouTube', 'Instagram', 'Email', 'Facebook'],
  },
  {
    title: 'Legal',
    description: ['Privacy Policy', 'Terms of Use'],
  },
];

function Footer(props) {
  const { classes } = props;
  console.log('Footer here')
  return (
    <React.Fragment>
      <CssBaseline />
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
    </React.Fragment>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);