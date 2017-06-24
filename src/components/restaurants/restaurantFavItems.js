import React from 'react';
import PropTypes from "prop-types";

const RestaurantFavItem = ({name, favItems}) => {
  return (

        <div className="card card-outline-primary">

          <div className="card-header fav-card-item-header">
            {name}
          </div>
          <div className="card-block">
            <ul className="list-group">
                  {favItems.map((favItem, i) => <li key={i} className="list-group-item fav-list-item" > {favItem} </li>)}
            </ul>
          </div>
        </div>

  );
};

RestaurantFavItem.propTypes = {
  name: PropTypes.string,
  favItems: PropTypes.array,
  handleChange: PropTypes.func
};

RestaurantFavItem.defaultProps = {
  name: "Saravana Bhavan",
  favItems: ["Idly", "Dosa"]
};

export default RestaurantFavItem;
