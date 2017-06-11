import React, { Component } from 'react';
import PropTypes from 'prop-types';
import geolocated from './geolocation';

class RetrieveGeolocation extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isGeolocationEnabled && this.props.coords != nextProps.coords) {
      this.props.handleGeolocationCoords(nextProps.coords);
      return true;
    }

    return false;
  }

  render() {
    return <div></div>
  }
}

RetrieveGeolocation.propTypes = {
  isGeolocationEnabled: PropTypes.bool,
  //coords: PropTypes.object,
  handleGeolocationCoords: PropTypes.func
} ;

export const geolocationProps = {
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
};

export default geolocated(geolocationProps)(RetrieveGeolocation);
