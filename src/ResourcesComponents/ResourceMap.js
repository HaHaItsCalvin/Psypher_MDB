import React, { Component } from "react";
import { compose, withProps, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import Typography from '@material-ui/core/Typography';

import {locations} from './locationData.js';

//Change these const Vars to determine the gridSize & initial Zoom of the map
const gridSizeVar=120;
const zoomVar=10;

/* Code was forked from https://gist.github.com/jwo/43b382fc60eb09d3a415c9953f4057f8#file-map-js*/
const MapWithAMarker = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `80vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs, withGoogleMap)(props => {
  return (
    <GoogleMap 
      defaultZoom={zoomVar} 
      defaultCenter={{ lat: 34, lng: -118 }}
    >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={gridSizeVar}
    >
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  <Typography>
                    {marker.locationName}
                  </Typography>
                  <Typography>
                    {marker.phone}
                  </Typography>
                </div>
              </InfoWindow>
            }
          </Marker>
        )
      })}
    </MarkerClusterer>
    </GoogleMap>
  )
});

export default class ResourceMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMarker: false
    }
  }
  handleClick = (marker, event) => {
    this.setState({ 
      selectedMarker: marker 
    })
  }
  render() {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={locations}
        onClick={this.handleClick}
      />
    )
  }
}
