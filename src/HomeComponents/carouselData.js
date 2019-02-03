import StigmasVid from './Media/Videos/StigmasVid.mp4';
import StigmasTestimonialVid from './Media/Videos//StigmasTestimonialVid.mp4';
import GlendaleVid from './Media/Videos//GlendaleVid.mp4';
import HSTestimonialVid from "./Media/Videos//HSTestimonialVid.mp4";
import DanyelTestimonialVid from "./Media/Videos//DanyelTestimonialVid.mp4";

import fullStigmasVid from './Media/Videos//fullStigmasVid.mp4';
import fullStigmasTestimonialVid from './Media/Videos//fullStigmasTestimonialVid.mp4';
import fullGlendaleVid from './Media/Videos//fullGlendaleVid.mp4';
import fullHSTestimonialVid from "./Media/Videos//fullHSTestimonialVid.mp4";
import fullDanyelTestimonialVid from "./Media/Videos//fullDanyelTestimonialVid.mp4";

export const carouselData=[
  {
    id: '1',
    overlay:'black-light',
    header:'Mental Health Stigma Workshop',
    info:'Mental Health Stigma Workshop at Elements Dance Space in Pasadena',
    link:'https://www.youtube.com/watch?v=N6HATuCctXc',
    highlightVideo: StigmasVid, 
    fullVideo: fullStigmasVid,
    vidType:'video/mp4',
    iFrameSrc:'https://www.youtube.com/embed/ELVJ0K6Bdzo?&autoplay=1',
  },  
  {
    id: '2',
    overlay:'black-light',
    header:'Stigma Workshop Testimonial ',
    info:'test',
    link:'https://www.youtube.com/watch?v=ELVJ0K6Bdzo',
    highlightVideo:StigmasTestimonialVid,
    fullVideo: fullStigmasTestimonialVid,
    vidType:'video/mp4',
    iFrameSrc:'https://www.youtube.com/embed/ELVJ0K6Bdzo?&autoplay=1',
  },
  {
    id: '3',
    overlay:'black-light',
    header:'Social Media and Mental Health Workshop',
    info:'test',
    link:'https://www.youtube.com/watch?v=UccGUpHq1nU&t=1s',
    highlightVideo:GlendaleVid,
    fullVideo: fullGlendaleVid,
    vidType:'video/mp4',
    iFrameSrc:'https://www.youtube.com/embed/ELVJ0K6Bdzo?&autoplay=1',
  }, 
  {
    id: '4',
    overlay:'black-light',
    header:'See what high school students thought of our workshop!',
    info:'test',
    link:'https://www.youtube.com/watch?v=aXH86f3zAmk',
    highlightVideo:HSTestimonialVid,
    fullVideo: fullHSTestimonialVid,
    vidType:'video/mp4',
    iFrameSrc:'https://www.youtube.com/embed/ELVJ0K6Bdzo?&autoplay=1',
  }, {
    id: '5',
    overlay:'black-light',
    header:'Hear about Danyel Moulton’s experience of teaching with us!',
    info:'test',
    link:'https://www.youtube.com/watch?v=ukisZIix9dY',
    highlightVideo: DanyelTestimonialVid,
    fullVideo: fullDanyelTestimonialVid,
    vidType:'video/mp4',
    iFrameSrc:'https://www.youtube.com/embed/ELVJ0K6Bdzo?&autoplay=1'
  },
];