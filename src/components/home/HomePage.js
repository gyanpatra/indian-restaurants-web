import React, { Component } from 'react';
import { connect } from "react-redux";
import get from "lodash/get";
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import RestaurantControls from '../restaurants/restaurantControls';
import Restaurants from '../restaurants/restaurants';
import RetrieveGeolocation  from '../geolocation/retrieveGeolocation';
import { handleGeolocationCoords } from '../../actions/geolocation';
import '../../styles/home.css';

class HomePage extends React.Component {
  //<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
  render() {
    const milesOptions = [5,10,50,100];
    return (
      <div className="">

        <RetrieveGeolocation handleGeolocationCoords={this.props.handleGeolocationCoords} />
        <div className="row">
          <RestaurantControls />
        </div>


        <Restaurants restaurantDetails={this.props.restaurants}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  handleGeolocationCoords: PropTypes.func,
  restaurants: PropTypes.array
} ;

const mapStateToProps = (state) => {
  return {
    restaurants: get(state, "restaurantsInfo.restaurants"),
    geoInfo: get(state, "restaurantsInfo.geoInfo")
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGeolocationCoords: (coords) => {
      dispatch(handleGeolocationCoords(coords));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
