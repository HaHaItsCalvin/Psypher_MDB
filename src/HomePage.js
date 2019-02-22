import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Animation } from "mdbreact";

//Home Components
import HomeLandingBanner from './HomeComponents/HomeLandingBanner.js';
import VideoCarousel from './HomeComponents/HomeVideoCarousel.js';
import HomeMissionCards from './HomeComponents/HomeMissionCards.js';
import HomeTestimonialsCards from './HomeComponents/HomeTestimonialsCards.js';
import HomeMediaCards from './HomeComponents/HomeMediaCards.js';
import HomeMissionPics from './HomeComponents/HomeMissionPics.js';
import HomeStatsCards from './HomeComponents/HomeStatsCard.js';
import HomeWhySection from './HomeComponents/HomeWhySection.js';
import HomeMessaingSection from './HomeComponents/HomeMessaging.js';

//General Media
import instaIcon from './GeneralMedia/Pictures/instaIcon.jpg';
import youtubeIcon from './GeneralMedia/Pictures/youtubeIcon.jpg';
import emailIcon from './GeneralMedia/Pictures/emailIcon.jpg';

//Home Media 
import TestimonialsPic from './HomeComponents/Media/Pictures/TestimonialsPic.jpg';
import ContactUsBackground from './HomeComponents/Media/Pictures/ContactUsBackground.png';
import Background from './HomeComponents/Media/Pictures/Background.png';
import StatsPic1 from './HomeComponents/Media/Pictures/StatsPic1.jpg';
import StatsPic2 from './HomeComponents/Media/Pictures/StatsPic2.jpg';
import StatsPic3 from './HomeComponents/Media/Pictures/StatsPic3.jpg';
import StatsPic4 from './HomeComponents/Media/Pictures/StatsPic4.png';
import StatsBackgroundPic from './HomeComponents/Media/Pictures/StatsBackgroundPic.jpg';
import MissionPic1 from './HomeComponents/Media/Pictures/MissionPic1.jpg';
import MissionPic2 from './HomeComponents/Media/Pictures/MissionPic2.jpg';
import MissionPic3 from './HomeComponents/Media/Pictures/MissionPic3.jpg';
import WorkshopPic1 from './HomeComponents/Media/Pictures/Workshop1.jpg';
import WorkshopPic2 from './HomeComponents/Media/Pictures/Workshop2.jpg';
import WorkshopPic3 from './HomeComponents/Media/Pictures/Workshop3.jpg';
import WorkshopPic4 from './HomeComponents/Media/Pictures/Workshop4.jpg';
import WorkshopPic5 from './HomeComponents/Media/Pictures/Workshop5.jpg';
import WorkshopPic6 from './HomeComponents/Media/Pictures/Workshop6.jpg';


import ReactGA from 'react-ga';
function initializeReactGA() {
    ReactGA.initialize('UA-133659922-1');
    ReactGA.pageview('/homepage');
}

const styles = theme => ({
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
    backgroundColor:'white',
  },
  Statistics:{
    paddingTop:'8vh',
    paddingRight:'20vh',
    backgroundImage: `url(${StatsBackgroundPic})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    width:'100%',
    backgroundPosition:'right',
    backgroundColor:'white'
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
    paddingTop:'10vh',
    backgroundImage: `url(${TestimonialsPic})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    width:'100%',
    backgroundPosition:'center',
    zIndex:"-1",
    backgroundAttachment:'fixed',
  },
  testimonialHeader:{
    color:'#B388FF',
    paddingBottom:'12vh', 
  },
  contactUnit:{
    paddingLeft: '5vh',
    paddingRight:'5vh',
    backgroundImage: `url(${ContactUsBackground})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'left',
    paddingTop:'5vh',
    backgroundColor:'white',
    paddingBottom:'3vh',
  },
  contactHeader:{
    paddingTop:'5vh',
    paddingBottom:'5vh',
    paddingLeft:'15vh',
  },
  ContactMessagingBody:{
    paddingLeft:'20vh',
  },
  ContactMediaBody:{
    paddingTop:'5vh',
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
  initializeReactGA();
  return(
  <MuiThemeProvider theme={theme}>
  <React.Fragment>
      <CssBaseline />
      <header> 
        <NavBar />
      </header>
          
          <main>
          {/*Home Banner Section*/}
          <HomeLandingBanner/>

      
      {/*Start Mission Section */}
        <div className={classes.missionUnit}>
            
            <Grid container direction ='row' spacing={8}>
              <Grid item xs={12} sm={3} med={3} lg={3}>
              <HomeMissionPics
                img={WorkshopPic1}
                header="First Psypher Workshop"
                info="Choreographer Natalie Sin teaches for Psypher’s first dance workshop at UCLA."
                link="https://www.youtube.com/watch?v=hM9KhgLkVKQ&feature=youtu.be&t=102"
              />  
              </Grid>
              
              <Grid item xs={12} sm={6} med={6} lg={6}>
              <HomeMissionPics
                img={WorkshopPic2}
                header="Mental Health Stigma Workshop"
                info="Mental Health Stigma Workshop at Elements Dance Space in Pasadena."
                link="https://www.youtube.com/watch?v=N6HATuCctXc"
              />    
              </Grid>
                    
              <Grid item xs={12} sm={3} med={3} lg={3}>
              <HomeMissionPics
                img={WorkshopPic3}
                header="History of Urban Dance Workshop"
                info="In collaboration with his Roots B4 Branches program, Arnel Calvario teaches about the history of urban dance."
              />  
              </Grid>
            </Grid>

            <Animation type="fadeInUp" reveal delay="0.5s" duration="0.8s" >
            <Grid container direction ='row' alignItems='center' className={classes.missionBody}>  
              <Grid item xs={10} sm={4} alignItems='center' justify='center'>
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
              <Grid item xs={1} sm={1}>
              </Grid>
              <Grid item xs={1} sm={1} style={{ borderLeft: '0.1em solid black', paddingTop:'4cm'}}>
            </Grid>

              <Grid item xs={12} sm={6}>
                 <Typography align='center' style={{fontSize: '24px', color: '#3CDBC0'}}> 
                  <span ><b>OUR MISSION</b> </span>
                </Typography>
                <Typography align='center'>
                  is to destigmatize mental health through urban dance workshops that
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
                      phrase="with local mental health "
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
                header="Principles of Dance Therapy"
                info="Dance Movement Therapists Miyuki Kanda and Lisa Goldfein teach about the principles of dance/movement therapy."
                link="https://www.youtube.com/watch?v=hM9KhgLkVKQ"
                />
              </Grid>
              
              <Grid item xs={12} sm={6} med={6} lg={6}>
              <HomeMissionPics
                img={WorkshopPic5}
                header="Social Media & Mental Health Workshop"
                info="Psypher’s social media and mental health workshop with Glendale High School’s CoEd Dance Team."
                link="https://www.youtube.com/watch?v=UccGUpHq1nU"
                />    
              </Grid>
                    
              <Grid item xs={12} sm={3} med={3} lg={3}>
              <HomeMissionPics
                img={WorkshopPic6}
                header="Good Vibes with Psypher"
                info="Psypher participants engaging in a mirroring exercise and sharing some good vibes!"
                link="https://youtu.be/hM9KhgLkVKQ?t=58"
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
        <Animation type="fadeIn" reveal delay='0.3s'duration="0.8s">
          <HomeWhySection/>
        </Animation>


        {/*Start Video Section */}
        <Animation type="fadeIn" reveal delay='0.3s'duration="0.8s">
          <VideoCarousel/>
        </Animation>


      {/*Start Testimonials Section */}
        <div className={classes.TestimonialsUnit}>
          <Animation type="fadeIn" reveal delay='0.3s'duration="0.8s">
            <Typography variant='h3' align='center' className={classes.testimonialHeader}> 
              Testimonials: How Psypher Makes an Impact
            </Typography>
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
        <div className={classes.contactUnit} id="ContactUs">
          <Typography variant='h2'  align='center' className={classes.contactHeader}> <b>GET IN TOUCH!</b></Typography>
          <Grid container direction='column' alignItems='center' justify='center' className={classes.ContactMessagingBody}>
            <HomeMessaingSection/>
          </Grid>
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