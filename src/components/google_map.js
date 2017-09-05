import React, { Component } from 'react';

export default class extends Component {
  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng});
    this.marker.setTitle(nextProps.title);
    this.marker.setPosition({lat: nextProps.lat, lng: nextProps.lng});
    this.infowindow.setContent(nextProps.contentString);
  }

  componentDidMount() {
    this.map = new google.maps.Map( this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
    this.infowindow = new google.maps.InfoWindow({
      content: this.props.contentString
    });
    this.marker = new google.maps.Marker({
      position: {lat: this.props.lat, lng: this.props.lng },
      map: this.map,
      title: this.props.title
    });
    this.marker.addListener('click', () => {
      this.infowindow.open(this.map, this.marker);
    });
  }

  render() {
    return (
      <div id='map' ref="map" />
    );
  }
}
