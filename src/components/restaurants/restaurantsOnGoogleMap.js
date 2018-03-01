import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps, withStateHandlers } from "recompose";
import PropTypes from "prop-types";
const FaAnchor = require("react-icons/lib/fa/anchor");
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


import RestaurantMarker from "./restaurantMarker";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDaXyxQ_RQOQcHYaDGdVvwcqL6q47tsTKs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(() => ({
   isOpen: false
    }), {
   onToggleOpen: ({ isOpen }) => () => ({
     isOpen: !isOpen
   })
 }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 37.6305, lng: -122.4111 }}>
    {props.isMarkerShown && (
      <div>
        {props.restaurantDetails.map((restaurantDetail, i) => <RestaurantMarker key={i} index={i} restaurantDetail={restaurantDetail} /> )}
      </div>
    )}
  </GoogleMap>
));

MyMapComponent.propTypes = {
  restaurantDetails: PropTypes.array.isRequired,
  userGeo: PropTypes.object,
  zoomLevel: PropTypes.string
};

MyMapComponent.defaultProps = {
  zoomLevel: "12"
};

export default MyMapComponent;
