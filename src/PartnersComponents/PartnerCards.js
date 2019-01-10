import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {Fa} from 'mdbreact';

import MiyukiKanada from './Media/Pictures/MiyukiKanada.jpg';
import LisaGoldfein from './Media/Pictures/LisaGoldfein.JPG';
import TracyBevington from './Media/Pictures/TracyBevington.jpg';
import SeanYee from './Media/Pictures/SeanYee.jpg';
import TuDevera from './Media/Pictures/TuDevera.jpg';
import BeauFournier from './Media/Pictures/BeauFournier.jpg';
import ArnelCalvario from './Media/Pictures/ArnelCalvario.JPG';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
 icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: '10vh',
  },
  heroContent: {
    maxWidth: '60%',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 4}px 0`,
  },
  card: {
    height: '100%',
    display: 'block',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardAction:{
    paddingBottom:'2vh',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

  const cardData = [
    {
      img: MiyukiKanada,
      Name: 'Miyuki Kanda',
      occupation: 'Licensed Marriage & Family Therapist, Board Certified Dance/Movement Therapist',
      specializations: 'Body-Oriented Psychotherapy, Authentic Movement, Dance Movement Therapy',
      organizations: 'Private Practice',
      Email: 'kmiyukidmt@gmail.com',
      Link: 'http://www.miyukikanda.com',
    },    
    {
      img: LisaGoldfein,
      Name: 'Lisa Goldfein',
      occupation: 'Licensed Marriage & Family Therapist, Board Certified Dance/Movement Therapist',
      specializations: 'Dance Movement Therapy, Mindfulness, Group Therapy',
      organizations: 'Casa Capri Recovery',
      Email: 'lisagdmt@gmail.com',
      Link: 'https://www.linkedin.com/in/lisa-goldfeinlpccbcdmt/',
    },
    {
      img: TracyBevington,
      Name: 'Tracy Bevington',
      occupation: 'Marriage & Family Therapist',
      specializations: 'Solution Focused Therapy, Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, Gestalt Therapy, Somatic Experiencing, Family Systems, and Attachment Therapy', 
      organizations: 'President & Founder of Pacific MFT Network',
      Email: 'tracy@pacificmft.com',
      Link: 'https://www.pacificmft.com',
    },
    {      
      img: SeanYee,
      Name: 'Sean Yee',
      occupation: 'Research Administrator',
      specializations:'',
      organizations: 'John Wayne Cancer Institute',
      Email: 'uclasy@gmail.com',
      Link: 'https://www.linkedin.com/in/uclasy/',
    },
    {      
      img: TuDevera,
      Name: 'Tu Devera',
      occupation: 'Co-Founder/Director of EDS',
      specializations:'Operations Director',
      organizations: 'Elements Dance Space',
      Email: 'tu@elementsdancespace.com ',
      Link: 'https://www.elementsdancespace.com/about/',
    },
    {      
      img: BeauFournier,
      Name: 'Beau Fournier',
      occupation: 'Co-Founder/Director of EDS',
      specializations:'Artistic Director',
      organizations: 'Elements Dance Space; Maker Empire',
      Email: 'beau@fannypak.com ',
      Link: 'https://www.elementsdancespace.com/about/',
    },
    {      
      img: ArnelCalvario,
      Name: 'Arnel Calvario',
      occupation: 'Doctor of Occupational Therapy/President of Culture Shock International',
      specializations:'Occupational Therapy, Hip Hop History Education, Youth',
      organizations: 'Culture Shock, Kinjaz, Kaba Modern, KM Legacy',
      Email: 'arnel@kinjaz.com ',
      Link: 'http://cultureshockdance.org/',
    },
 ];

function PartnerCards(props) {
  const { classes } = props;
  return (
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40} >
            {cardData.map(card => (
              <Grid item key={card.img} xs={6} sm={4} md={3} lg={3} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title={card.Name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      {card.Name}
                    </Typography>
                    <Typography align="center">
                      {card.occupation}
                    </Typography>
                  <ul className="list-inline py-2">
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg fb-ic">
                      <Fa icon="envelope-o" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href={card.Link} className="p-2 fa-lg gplus-ic">
                      <Fa icon="link" />
                    </a>
                  </li>
                </ul>
                  </CardContent>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
    )
  }

PartnerCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartnerCards);