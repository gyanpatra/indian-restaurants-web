import React, { Component } from 'react';
import { connect } from "react-redux";
import get from "lodash/get";
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import RestaurantControls from '../restaurants/restaurantControls';
import Restaurants from '../restaurants/restaurants';
import RestaurantsList from '../restaurants/restaurantsList';
import RetrieveGeolocation  from '../geolocation/retrieveGeolocation';
import { handleGeolocationCoords } from '../../actions/geolocation';
import { getRestaurantsWithoutGeo } from "../../actions/restaurantsAction"
import '../../styles/home.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    //loading server side and then flip to client side
    props.getRestaurantsWithoutGeo();
  }


  // The rendering happens with server side geolocation and then flips to client side geolocation
  // In the constructor server side geolocation happens via props.getRestaurantsWithoutGeo() fetch restaurants
  // and then <RetrieveGeolocation /> uses client side geo
  render() {
    const milesOptions = [5,10,50,100];
    const { restaurants } = this.props;
    if(restaurants) {
      return (
        <div className="">
          <RetrieveGeolocation handleGeolocationCoords={this.props.handleGeolocationCoords} />
          <RestaurantControls />
          <RestaurantsList restaurantDetails={this.props.restaurants}/>
        </div>
      );
    } else {
      return (
        <div>
          Hi Fetching restaurants for you . Hold tight.
        </div>
      );
    }

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
    },
    getRestaurantsWithoutGeo: () => {
      dispatch(getRestaurantsWithoutGeo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
