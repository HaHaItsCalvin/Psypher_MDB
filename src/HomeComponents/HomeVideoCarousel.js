import React, { Component } from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
} from "mdbreact";
import HomeVidSection from './HomeVideoSection.js';
import {carouselData} from './carouselData.js';

const carouselUnit={
  paddingTop:'5vh',
  height:'70vh',
  backgroundColor:'black',
  paddingBottom:'7vh'
};

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
