import React from 'react';
import { connect } from "react-redux";
import get from "lodash/get";
import PropTypes from 'prop-types';
import RestaurantsOnGoogleMap from '../restaurants/restaurantsOnGoogleMap.js';
import { getRestaurantsWithoutGeo } from "../../actions/restaurantsAction";

class OnMap extends React.Component {
  constructor(props) {
    super(props);
    //loading server side and then flip to client side
    props.getRestaurantsWithoutGeo();
  }


  render() {
    const { restaurants } = this.props;
    if(restaurants) {
      return (
        <RestaurantsOnGoogleMap isMarkerShown restaurantDetails={restaurants} />
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

OnMap.propTypes = {
  restaurants: PropTypes.array,
  getRestaurantsWithoutGeo: PropTypes.func
};


const mapStateToProps = (state) => {
  return {
    restaurants: get(state, "restaurantsInfo.restaurants"),
    geoInfo: get(state, "restaurantsInfo.geoInfo")
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurantsWithoutGeo: () => {
      dispatch(getRestaurantsWithoutGeo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnMap);
