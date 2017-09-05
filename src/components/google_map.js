import React, { Component } from 'react';

export default class extends Component {
  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng});
    this.marker.setTitle(nextProps.title);
    this.marker.setPosition({lat: nextProps.lat, lng: nextProps.lng})
  }

  componentDidMount() {
    this.map = new google.maps.Map( this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
    this.marker = new google.maps.Marker({
      position: {lat: this.props.lat, lng: this.props.lng },
      map: this.map,
      title: this.props.title
    });
  }

  render() {
    return (
      <div id='map' ref="map" />
    );
  }
}
