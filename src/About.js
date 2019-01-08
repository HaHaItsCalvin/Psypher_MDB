import React from "react";
import NavBar from './NavBar.js';
import FooterNav from './Footer.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import AboutTeam from './AboutComponents/AboutTeam';
import AboutFAQ from './AboutComponents/AboutFAQs.js';

const styles = theme => ({
  aboutUnit:{

  },
  FAQUnit:{
    paddingTop:'60vh',
  },
});

const Menu=[
  {
    Title:'General',
    Link:'#General',
  },
  {
    Title:'Teaching',
    Link:'#Teaching',
  },
];

const FAQsGeneral=[
  {
    question: 'Where did Psypher start?',
    answer: 'Psypher was founded at UCLA as a student organization, and due to the positive feedback we received there, we decided to scale our model and bring it into middle schools, high schools, and dance studios that also value wellness and mental health!',
  },
  {
    question:'What age group is Psypher appropriate for?',
    answer:'We can curate workshops based on the ages that we are working with! For younger audiences (e.g. 10-14 years old), we could host workshops that teach a range of concepts such as coping skills, stress management, and mindfulness. For youth in high schools, we can also cover topics like anxiety and depression so that students are able to recognize symptoms and know where to get help for these common mental health concerns. For older audiences, maybe your workplace needs an engaging way to teach employees about verbal and nonverbal communication skills. These are just some examples of work we’ve done, so get in touch and we can figure out what might work best for you!',
  },
  {
    question:'We are not a school or a dance studio, can you still host a workshop for us?',
    answer:'We definitely can! Just email us at psypherofficial.la@gmail.com and we can figure out a workshop based on your specific needs. Check out the list of topics that we offer for teams, and if we’re missing a topic that you’d like us to cover, just let us know and our team of mental health professionals can most likely curate one for you!',
  },

];
const FAQsTeaching=[
  
  {
    question:'Can I teach at your workshop?',
    answer:'We are always looking for new opportunities to collaborate with leaders in the dance community or the field of mental health! Whether you are interested in teaching as a choreographer or as a mental health discussion leader, email us at psypherofficial.la@gmail.com and we will send you a form that you can fill out to apply to teach. ',
  },
  {
    question:'Can you teach at our school or studio?',
    answer:'We would love to! Please get in touch with us at psypherofficial.la@gmail.com and we can work out the details to make it happen.',
  },
  {
    question:'Who teaches your workshops?',
    answer: 'This varies depending on the topic, and our past speakers have included researchers, clinicians, other mental health professionals, and college students.  We pull from a very diverse group of speakers since we cover many different topics. Additionally, every workshop features seasoned choreographers that have a lot of valuable experiences and insights to offer to our students. You can get a glimpse of all the different people we’ve worked with in the past by checking out the social media content from our early stages at UCLA (@psypherucla), as well as our current social media pages that can be accessed through our home page!',
  },
];

class About extends React.Component {
  render() {
    console.log('ABOUT')
    return (
      <React.Fragment>
        <NavBar/>
        <main>
      <AboutTeam/>

          <Grid container direction='row' style={{paddingLeft:'45px'}}>
            <Grid item xs={12} style={{paddingBottom:'25px', paddingTop:'20px',}}>
              <h1> Frequently Asked Questions </h1>
            </Grid>

            <Grid item xs={12} sm={3} med={3} lg={3} xl={3} style={{paddingRight:'20px'}}>
              {Menu.map(menuItem=>(
                   <Typography variant='h6' style={{ paddingBottom:'10px',paddingTop:'10px', borderBottom: '0.1em solid lightgrey' }}>
                     <a href={menuItem.Link} style={{color:'black'}}>{menuItem.Title}</a>
                   </Typography>
              
              ))}
            </Grid>

            <Grid item container direction='column' spacing={40} xs={12} sm={8} med={8} lg={8} xl={8}>
              <Grid item id='General'>
              <h1>General </h1>
              {FAQsGeneral.map(item=>(  
                <AboutFAQ
                  question={item.question}
                  answer={item.answer}
                />
                ))}
              </Grid>

              <Grid item id='Teaching'>
                <h1> Teaching</h1>
                {FAQsTeaching.map(item=>(  
                <AboutFAQ
                  question={item.question}
                  answer={item.answer}
                />
                ))}
              </Grid>

            </Grid>
          </Grid>
        </main>
        <FooterNav/>
      </React.Fragment>
    );
  }
}

export default About;