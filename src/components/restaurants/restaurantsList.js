import React, { Component } from 'react';
import PropTypes from "prop-types";
import RestaurantFavItems from './restaurantFavItems';

const _renderList = (restaurantDetails) =>  restaurantDetails.map((restaurantDetail, index) => (
    _renderSingleRestaurantAndItsFavItem(index, restaurantDetail)
));
const _renderSingleRestaurantAndItsFavItem = (index, restaurantDetail)  => (
  <div className="col-lg-4 col-xs-6 card-padding">
    <RestaurantFavItems key={index} {...restaurantDetail} />
  </div>
);

const RestaurantsList = ({restaurantDetails}) => (
  <div className="field">
    <div className="container-fluid">
      <div className="row">
        <div className="card-group">
             {_renderList(restaurantDetails)}
        </div>
      </div>
    </div>
  </div>
);


RestaurantsList.propTypes = {
  restaurantDetails: PropTypes.array.isRequired
};

export default RestaurantsList;
