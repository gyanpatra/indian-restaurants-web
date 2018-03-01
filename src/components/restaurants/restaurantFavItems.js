import React from 'react';
import PropTypes from "prop-types";

const RestaurantFavItem = ({name, favItems, distanceInMiles, website, directionURL}) => {
  return (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">
          <a href={website} target="_new" >
            {name}
          </a></h4>
        <p className="card-text">
          <ul className="card-text">
            {favItems.map((favItem, i) => <li key={i} className="list-group-item fav-list-item" > {favItem} </li>)}
          </ul>
        </p>
        <p className="card-text">
          <small className="text-muted">{distanceInMiles} miles from your location</small>
          <a href={directionURL} targe="_new">
            Directions to Here
          </a>
        </p>
      </div>
    </div>
  );

};

RestaurantFavItem.propTypes = {
  name: PropTypes.string,
  favItems: PropTypes.array,
  distanceInMiles: PropTypes.string,
  website: PropTypes.string,
  directionURL: PropTypes.string,
  handleChange: PropTypes.func
};

RestaurantFavItem.defaultProps = {
  name: "Saravana Bhavan",
  favItems: ["Idly", "Dosa"]
};

export default RestaurantFavItem;
