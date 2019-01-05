import React, { Component } from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import Typography from '@material-ui/core/Typography';


{/* Code was forked from https://gist.github.com/jwo/43b382fc60eb09d3a415c9953f4057f8#file-map-js*/}
const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
  return (
    <GoogleMap 
      defaultZoom={5} 
      defaultCenter={{ lat: 29.5, lng: -95 }}
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
              </InfoWindow>}
            }
          </Marker>
        )
      })}
    </GoogleMap>
  )
});

export default class ResourceMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations:[
        {
          address:"1234 Test Ave",
          city: "Los Angeles",
          phone: "626-123-4576",
          county: "Los Angeles",
          notes: "Take dance workshops here",
          locationName: "Elements Dance Space",
          source:"WebLinkHere",
          latitude:30.200987,
          longitude:-95.473728,
        },
        {
          address:"1234 Test Ave",
          city: "Los Angeles",
          phone: "626-123-4576",
          county: "Los Angeles",
          notes: "Take dance workshops here",
          locationName: "Kinjaz Dance Space",
          source:"WebLinkHere",
          latitude:32.200987,
          longitude:-92.473728,
        },
      ],

      selectedMarker: false
    }
  }
  handleClick = (marker, event) => {
    // console.log({ marker })
    this.setState({ selectedMarker: marker })
  }
  render() {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.locations}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `50vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}