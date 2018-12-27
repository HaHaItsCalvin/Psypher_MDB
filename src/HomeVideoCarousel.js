import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask,
  Container
} from "mdbreact";
import { MDBBtn } from "mdbreact";

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

const caption={
  paddingBottom:'10vh',
};
const carouselUnit={
  height:'70vh',
  backgroundColor:'#14a37f',
};
const vid={
  height:'70vh',
  width:'100%',
}
const link={
  color:'white',
}

const carouselData=[
  {
    id: '1',
    img: StigmasWorkshop,
    overlay:'black-light',
    header:'Mental Health Stigma Workshop at Elements Dance Space',
    text:'test',
    link:'https://www.youtube.com/watch?v=N6HATuCctXc',
    video: StigmasVid, 
    vidType:'video/mp4',
  },  
  {
    id: '2',
    img: StigmasTestimonial,
    overlay:'black-light',
    header:'Stigma Workshop Testimonial ',
    text:'test',
    link:'https://www.youtube.com/watch?v=ELVJ0K6Bdzo',
    video:StigmasTestimonialVid,
    vidType:'video/mp4',
  },
  {
    id: '3',
    img: Glendale,
    overlay:'black-light',
    header:'Social Media and Mental Health Workshop at Glendale High School',
    text:'test',
    link:'https://www.youtube.com/watch?v=UccGUpHq1nU&t=1s',
    video:GlendaleVid,
    vidType:'video/mp4',
  }, 
  {
    id: '4',
    img: HSTestimonial,
    overlay:'black-light',
    header:'See what high school students thought of our workshop!',
    text:'test',
    link:'https://www.youtube.com/watch?v=aXH86f3zAmk',
    video:HSTestimonialVid,
    vidType:'video/mp4',
  }, {
    id: '5',
    img: DanyelTestimonial,
    overlay:'black-light',
    header:'Hear about Danyel Moulton’s experience of teaching with us!',
    text:'test',
    link:'https://www.youtube.com/watch?v=ukisZIix9dY',
    video:DanyelTestimonialVid,
    vidType:'video/mp4',
  },
];

class VideoCarousel extends Component {
  render() {
    return (
        <Carousel
          activeItem={1}
          length={carouselData.length}
          showControls={true}
          showIndicators={true}
          className={"z-depth-1"}
          style={carouselUnit}
          interval={10000}
        >
          <CarouselInner>
          {carouselData.map(item=>(
            <CarouselItem itemId={item.id}>
            <View>
              <video controls muted className="video-fluid d-block" style={vid} autoPlay loop>
                <source src={item.video} type={item.vidType} />
              </video>
              <Mask overlay={item.overlay}/>
            </View>
              <CarouselCaption style={caption}>
                <h3 className="h3-responsive">{item.header}</h3>
                <MDBBtn color="deep-purple"><a href={item.link} style={link}>Play Video</a></MDBBtn>
              </CarouselCaption>
            </CarouselItem>
          ))}
          </CarouselInner>
        </Carousel>
    );
  }
}

export default VideoCarousel;
