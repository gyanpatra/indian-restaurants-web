import React, { Component } from 'react';
import PropTypes from "prop-types";

import {
  Marker,
  InfoWindow
} from "react-google-maps";

class RestaurantMarker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }
  onToggleOpen(e) {
     this.setState({ isOpen: !this.state.isOpen });
  }



  render() {
     const {index, restaurantDetail} = this.props;
    return (
      <Marker key={index}
        position={{ lng: restaurantDetail.geo.coordinates[0], lat: restaurantDetail.geo.coordinates[1] }} onClick={() => { this.onToggleOpen(); }} >
          {this.state.isOpen && <InfoWindow onCloseClick={() => {this.onToggleOpen(); }}>
            <div>{restaurantDetail.name}</div>
          </InfoWindow>}
      </Marker>
    );
  }
}

RestaurantMarker.propTypes = {
  index: PropTypes.number,
  restaurantDetail: PropTypes.Object
};

export default RestaurantMarker;
