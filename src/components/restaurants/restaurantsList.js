import React, { Component } from 'react';
import PropTypes from "prop-types";
import RestaurantFavItems from './restaurantFavItems';

const _renderList = (restaurantDetails) =>  restaurantDetails.map((restaurantDetail, index) => (
    _renderSingleRestaurantAndItsFavItem(index, restaurantDetail)
));
const _renderSingleRestaurantAndItsFavItem = (index, restaurantDetail)  => (
  <div className="col-lg-6 col-xs-12 card-padding">
    <RestaurantFavItems key={index} {...restaurantDetail} />
  </div>
);

class RestaurantsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurantDetails } = this.props;

    return (
      <div className="field">
        <div className="container">
          <div className="row">
            <div className="card-group">
                 {_renderList(restaurantDetails)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RestaurantsList.propTypes = {
restaurantDetails: PropTypes.array.isRequired
};

RestaurantsList.defaultProps = {
  restaurantDetails : [
    {
      restaurantName: "Saravana Bhavan",
      favItems: ["Idly", "Dosa"]
    },
    {
      restaurantName: "Madras Cafe",
      favItems: ["Tomato Rice", "Malabar"]
    }
  ]
};

export default RestaurantsList;
