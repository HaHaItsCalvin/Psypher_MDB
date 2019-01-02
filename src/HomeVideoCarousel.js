import React, { Component } from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
} from "mdbreact";

import HomeVidSection from './HomeVideoSection.js';

import StigmasWorkshop from "./StigmasAtEDS.jpg";
import StigmasTestimonial from "./StigmasTestimonial.jpg";
import Glendale from "./Glendale.jpg";
import HSTestimonial from "./HSTestimonial.jpg";
import DanyelTestimonial from "./DanyelTestimonial.jpg";

import StigmasVid from './StigmasVid.mp4';
import StigmasTestimonialVid from './StigmasTestimonialVid.mp4';
import GlendaleVid from './GlendaleVid.mp4';
import HSTestimonialVid from "./HSTestimonialVid.mp4";
import DanyelTestimonialVid from "./DanyelTestimonialVid.mp4";

import fullStigmasVid from './fullStigmasVid.mp4';
import fullStigmasTestimonialVid from './fullStigmasTestimonialVid.mp4';
import fullGlendaleVid from './fullGlendaleVid.mp4';
import fullHSTestimonialVid from "./fullHSTestimonialVid.mp4";
import fullDanyelTestimonialVid from "./fullDanyelTestimonialVid.mp4";

const carouselUnit={
  paddingTop:'5vh',
  height:'70vh',
  backgroundColor:'black',
};

const carouselData=[
  {
    id: '1',
    img: StigmasWorkshop,
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
    img: StigmasTestimonial,
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
    img: Glendale,
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
    img: HSTestimonial,
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
    img: DanyelTestimonial,
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

class VideoCarousel extends Component {
  constructor(props){
    super(props);
    this.state={
      interval:240000,
    }
  }

  render() {
    return (
        <Carousel
          activeItem={1}
          length={carouselData.length}
          showControls={false}
          showIndicators={true}
          className={"z-depth-1"}
          style={carouselUnit}
          interval={this.state.interval}
        >
          <CarouselInner>
          {carouselData.map(item=>(
            <CarouselItem itemId={item.id}>
            <HomeVidSection
            header={item.header}
            info={item.info}
            highlightVideo={item.highlightVideo}
            fullVideo={item.fullVideo}
            vidType={item.vidType}
            overlay={item.overlay}
            link={item.link}
            />

            </CarouselItem>
          ))}
          </CarouselInner>
        </Carousel>
    );
  }
}

export default VideoCarousel;
