import React, { Component } from 'react';
import GoogleMap from './google_map';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { lat: -34.397, lng: 150.644, title: 'Wollongong', contentString: 'Welcome to Wollongong!'} ; 
  }
  render() {
    return (
      <div style={{height: '100%'}}>Map me!
        <button onClick={()=> this.setState({ lat: 40.7128, lng: -74.0059, title: 'New York', contentString: 'Welcome to New York!'})}>
          New York
        </button>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} title={this.state.title} contentString={this.state.contentString} />
      </div>
    );
  }
}
