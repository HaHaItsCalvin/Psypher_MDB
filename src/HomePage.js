import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Animation } from "mdbreact";

import VideoCarousel from './HomeVideoCarousel.js';
import HomeMissionCards from './HomeMissionCards.js';
import HomeTestimonialsCards from './HomeTestimonialsCards.js';
import HomeMediaCards from './HomeMediaCards.js';
import HomeMissionPics from './HomeMissionPics.js';
import HomeStatsCards from './HomeStatsCard.js';
import HomeWhySection from './HomeWhySection.js';

import TestimonialsPic from './TestimonialsPic.jpg';
import instaIcon from './instaIcon.jpg';
import youtubeIcon from './youtubeIcon.jpg';
import emailIcon from './emailIcon.jpg';
import ContactUsBackground from './ContactUsBackground.png';
import Background from './Background.png';
import BackgroundPsypher from './Psypher.png';
import StatsPic1 from './StatsPic1.jpg';
import StatsPic2 from './StatsPic2.jpg';
import StatsPic3 from './StatsPic3.jpg';
import StatsPic4 from './StatsPic4.jpg';
import WhyClockPic from './WhyClockPic.jpg';
import StatsBackgroundPic from './StatsBackgroundPic.jpg';
import MissionPic1 from './MissionPic1.jpg';
import MissionPic2 from './MissionPic2.jpg';
import MissionPic3 from './MissionPic3.jpg';
import WorkshopPic1 from './Workshop1.jpg';
import WorkshopPic2 from './Workshop2.jpg';
import WorkshopPic3 from './Workshop3.jpg';
import WorkshopPic4 from './Workshop4.jpg';
import WorkshopPic5 from './Workshop5.jpg';
import WorkshopPic6 from './Workshop6.jpg';
//import Image from 'material-ui-image'


const styles = theme => ({
  topPicContainer: {
    backgroundImage: `url(${Background})`,
    backgroundColor: '#000000',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:"85vh",
    width:'100%',
    maxHeight:'937px',
    backgroundPosition:'center',
    backgroundAttachment:'fixed'
  },
  topPsypherPic:{
    backgroundImage: `url(${BackgroundPsypher})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    height:"40vh",
    width:'100%',
    backgroundPosition:'top',
  },
  missionUnit:{
    backgroundColor:'white',
    paddingTop:10,
    paddingBottom:'5vh',
    paddingLeft:5,
    paddingRight:5,

  },
  missionBody:{
    paddingTop:25,
    paddingBottom:25,
    paddingRight:'10vh',
    paddingLeft:'10vh',
  },
  StatisticsUnit:{
    paddingLeft: '13vh',
    paddingRight:'13vh',
    paddingBottom:50,
  },
  Statistics:{
    paddingTop:'8vh',
    paddingRight:'20vh',
    backgroundImage: `url(${StatsBackgroundPic})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    width:'100%',
    backgroundPosition:'right',
  },
  WhyUnit:{
    paddingTop:'10vh',
    paddingBottom:50,
    backgroundImage: `url(${WhyClockPic})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    width:'100%',
    backgroundPosition:'center',
    zIndex:"-1",
    backgroundPosition:'center',
    backgroundAttachment:'fixed',
    opacity:0.6,
  },
  WhyText:{
    paddingBottom:'5vh',
    color:'purple',
  },
  videoUnit:{
    paddingTop:'7vh',
    paddingBottom:'10vh',
  },
  Video:{

  },
  TestimonialsUnit:{
    paddingLeft: 50,
    paddingRight:50,
    paddingBottom:'15vh',
    paddingTop:'15vh',
    backgroundImage: `url(${TestimonialsPic})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    width:'100%',
    backgroundPosition:'center',
    zIndex:"-1",
    backgroundPosition:'center',
    backgroundAttachment:'fixed',
  },
  testimonialHeader:{
    color:'#B388FF',
    paddingBottom:'6vh', 
  },
  contactUnit:{
    paddingTop:'10vh',
    paddingLeft: '5vh',
    paddingRight:'5vh',
    paddingBottom:'20vh',
    backgroundImage: `url(${ContactUsBackground})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'left',
  },
  contactHeader:{
    paddingBottom:'12vh',
    paddingLeft:'15vh',
    paddingTop:'5vh',
  },
  ContactMediaBody:{
    paddingLeft:'20vh',
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
  text: {        
    borderRadius: 3,
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 30px',
        background:"white",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontWeight: 500,
      fontSize: 48,
        fontFamily: 'sans-serif',
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
      dark:'#7e518d',
      contrastText: '#000',
    },
    textGrey:{
      main:'#9E9E9E',
    },
  },
});

function HomePage(props) {
  const { classes } = props;  
  console.log('start')
    console.log('New Test with NavBar')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
  return(
  <MuiThemeProvider theme={theme}>
  <React.Fragment>
      <CssBaseline />
      <header> 
        <NavBar />
      </header>
          
          <main>
          {/*Home Banner Section*/}
        <Grid container direction='column' justify="center" alignItems="center" className={classes.topPicContainer} xs={12} sm={12} med={12}> 
          <Grid className={classes.topPsypherPic}> </Grid>
        </Grid>
      
      {/*Start Mission Section */}
        <div className={classes.missionUnit}>
            <Animation type="fadeInUp" delay='1s'duration="0.8s">
            <Grid container direction ='row' spacing={8}>
              <Grid item xs={12} sm={3} med={3} lg={3}>
              <HomeMissionPics
                img={WorkshopPic1}
              />  
              </Grid>
              
              <Grid item xs={12} sm={6} med={6} lg={6}>
              <HomeMissionPics
                img={WorkshopPic2}
              />    
              </Grid>
                    
                    <Grid item xs={12} sm={3} med={3} lg={3}>
              <HomeMissionPics
                img={WorkshopPic3}
              />  
              </Grid>
            </Grid>
            </Animation>

            <Animation type="fadeInUp" reveal delay="0.5s" duration="0.8s" >
            <Grid container direction ='row' alignItems='center' className={classes.missionBody}>  
              <Grid item xs={12} sm={4}>
              <Typography align='right' variant='h3' color='primary'>
                  <b>WHO AND</b>
              </Typography>
              <Typography align='right' variant='h3' color='primary'>
                  <b>WHAT</b>
              </Typography>
              <Typography align='right' variant='h3' color='primary'>
                  <b>IS <span style={{color:'#9900ff'}}> PSYPHER </span></b>
              </Typography>
              </Grid>
              <Grid item xs={0} sm={1}>
              </Grid>
              <Grid item xs={0} sm={1} style={{ borderLeft: '0.1em solid black', paddingTop:'4cm'}}>
            </Grid>

              <Grid item xs={12} sm={6}>
                 <Typography align='center'> 
                  <span><b>OUR MISSION</b> </span>is to destigmatize mental health 
                </Typography>
                <Typography align='center'>
                  through urban dance workshops that
                </Typography>
                <Grid item container direction="row" justify='center' spacing={32}>
                  <Grid item xs={12} sm={4}>
                    <HomeMissionCards
                      img={MissionPic1}
                      keyword="Increase"
                      phrase="mental health"
                      botPhrase="literacy"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <HomeMissionCards
                      img={MissionPic2}
                      keyword="Highlight"
                      phrase="dance as an expressive"
                      botPhrase='outlet'
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <HomeMissionCards
                      img={MissionPic3}
                      keyword="Partner"
                      phrase="with local mental health professionals"
                      botPhrase='professionals'
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Animation>

            <Animation type="fadeInUp" reveal delay="0.5s" duration="0.8s" >
             <Grid container direction ='row' spacing={8}>
              <Grid item xs={12} sm={3} med={3} lg={3}>
              <HomeMissionPics
                img={WorkshopPic4}
              />  
              </Grid>
              
              <Grid item xs={12} sm={6} med={6} lg={6}>
              <HomeMissionPics
                img={WorkshopPic5}
              />    
              </Grid>
                    
                    <Grid item xs={12} sm={3} med={3} lg={3}>
              <HomeMissionPics
                img={WorkshopPic6}
              />  
              </Grid>
            </Grid>
            </Animation>
          </div>


        {/*Start Stats Section */}
          <div className={classes.StatisticsUnit}>
            <Grid container direction='row' alignItems='center' spacing={16}>
              <Grid item xs={12} sm={12} container direction='column' spacing={24} class={classes.Statistics} justify='center' alignItems='center'> 
                <Animation type="bounceInDown" reveal duration="0.7s">
                  <Typography align='left' variant='subtitle1'> OUR PURPOSE </Typography>
                  <Typography align='left' variant='h3' color='primary'> <b>WHY</b> </Typography>
                  <Typography align='left' variant='h3' style={{color:'#7e518d'}}> <b>PSYPHER</b> </Typography>
                </Animation>
                <Grid item container direction='row' justify='center' spacing={32} style={{paddingTop:'10vh'}}>
                <Grid item xs={12} sm={3} med={3} lg={3}>
                  <HomeStatsCards 
                    img={StatsPic1}
                    Title="DEATH BY SUICIDE"
                    Body="Suicide is the 2nd leading cause of death for young peopel ages 10-34 years old."
                    delay='0s'
                  />            
                </Grid>
                  <Grid item xs={12} sm={3} med={3} lg={3}>
                  <HomeStatsCards 
                    img={StatsPic2}
                    Title="13 SECONDS"
                    Body="Every 13 seconds, someone takes their own life in the United States."
                    delay='0.1s'
                    />           
                    
                </Grid>
                  <Grid item xs={12} sm={3} med={3} lg={3}>
                  <HomeStatsCards 
                    img={StatsPic3}
                    Title="90% OF CASES"
                    Body="90% of people who commit suicide had underlying mental illness."
                    delay='0.2s'
                    />            
                </Grid>
                  <Grid item xs={12} sm={3} med={3} lg={3}>
                  <HomeStatsCards 
                    img={StatsPic4}
                    Title="14 YEARS OLD"
                    Body="50% of all lifetime cases of mental illness begin by age 14, 75% of them begin by age 24."
                    delay='0.3s'
                  />  
                </Grid>
                </Grid>
              </Grid> 
            </Grid>
          </div>

        {/*Start Why Section */}
        <HomeWhySection/>


        {/*Start Video Section */}
        <VideoCarousel/>


      {/*Start Testimonials Section */}
        <div className={classes.TestimonialsUnit}>
          <Animation type="fadeIn" reveal delay='0.3s'duration="0.8s">
            <h1 align='center' className={classes.testimonialHeader}> Testimonials: How Psypher Makes an Impact</h1>
          </Animation>
            <Grid container direction= 'row' className={classes.Testimonials} alignItems="center" justify="center" spacing='40' xs={12} s={12} med={12} lg={12} xl={12}>
              <Grid item sm={4}> 
              <HomeTestimonialsCards
                  Quote="It brings together something many people struggle with alone and something that brings people together, 
                    so maybe the combination can help get people more comfortable with the idea that they don't have to struggle alone
                    with any mental health concerns they may be facing."
                  Source="Grace Zhu"
                  Background="Psypher Participant"  
                  fadeType="fadeInLeft"
              />
              </Grid>
              
              <Grid item sm={4} style={{ borderLeft: '0.1em solid white', paddingTop:'0.5cm'}}> 
              <HomeTestimonialsCards
                  Quote="Sometimes there is stuff that you feel is burdening you, and it’s hard to put it into words. Sometimes releasing it 
                    through a physical medium, through your body, lets you release that without having to say anything. 
                    That’s a cathartic experience."
                  Source="Alexia Diaz"
                  Background="Psypher Participant"  
                  fadeType="fadeInUp" 
              />
              </Grid>
              
              <Grid item sm={4} style={{ borderLeft: '0.1em solid white', paddingTop:'0.1cm'}}> 
              <HomeTestimonialsCards
                  Quote="Talking about mental health is just really unapproachable and sometimes even boring for other people.  
                    Having dance to add this cool, fun aspect to it can keep you engaged. It makes 
                    these learning experiences so much more impactful."
                    Source="JK Suh"
                    Background="Psypher Participant" 
                    fadeType="fadeInRight" 
                />
              </Grid>
            </Grid>
        </div>

      {/*Start ContactUs Section*/}
        <div className={classes.contactUnit}>
          <Animation type="fadeIn" reveal delay='0.3s'duration="0.8s">
            <Typography variant='h2'  align='center' className={classes.contactHeader}> <b>GET IN TOUCH!</b></Typography>
          </Animation>
            <Grid container spacing={40} direction='row' justify='center' alignItems='center' className={classes.ContactMediaBody}>
              <Grid item xs={12} sm={12} med={3} lg={3} xl={3}>
                <HomeMediaCards 
                  img={youtubeIcon}
                  link="https://www.youtube.com/channel/UC1OPKweUr8nS75zKuO_FMeA"
                  Title="PSYPHER LA"
                  Body="Subscribe to our YouTube channel to watch videos of our work!"
                  delay="0.5"
                />            
              </Grid>
                <Grid item xs={12} sm={12} med={3} lg={3} xl={3}>
                <HomeMediaCards 
                  img={instaIcon}
                  link="https://www.instagram.com/psypherla/"
                  Title="PSYPHERLA"
                  Body="Follow our Instagram page to keep up with our promos for future events!"
                  delay="0.7"
                  />
              </Grid>
                <Grid item xs={12} sm={12} med={3} lg={3} xl={3}>
                <HomeMediaCards 
                  img={emailIcon}
                  link=""
                  Title="PSYPHEROFFICIAL.LA@GMAIL.COM"
                  Body="Don't worry about us missing your message; we check our email daily!"
                  delay="0.9"
                />            
              </Grid>
                
              </Grid>
          </div>
        
          </main>
    <Footer/>
  </React.Fragment>
  </MuiThemeProvider >
  )
  
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);