import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';


class Map extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             address: '',
             windowActive: true,

             location: {
                 lat: -1.2884,
                 lng: 35.8233
             }
        };
    }
    getLocation = async() =>{
        const location={}
        location.lat = ((Math.random()*90+1) - (Math.random()*90+1))
        location.lng = ((Math.random()*90+1) - (Math.random()*90+1))
        let api_call = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key='AIzaSyA9X9E2Q-AAoFp8DEXYTGIbunXiqZTJpHY'`)
        let response = api_call.json();
        console.log(response);
    }
    render() {
        return (
          <Map google={this.props.google} zoom={14}
            initialCenter={this.state.location}
            center={this.state.location}>
     
            
            {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
                {/* <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div> */}
            {/* </InfoWindow> */}
          </Map>
        );
      }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey,
      language: props.language,
    }
  ))(Map)