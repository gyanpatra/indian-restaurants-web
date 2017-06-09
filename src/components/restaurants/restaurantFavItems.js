import React, {PropTypes} from 'react';

const RestaurantFavItem = ({restaurantName, favItems}) => (
  <div className="container">
    <div className="red">
      <label>{restaurantName}</label>
    </div>
    <div className="blue">
      <ul>
      {favItems.map((favItem, i) => <li key={i}>{favItem}</li>)}
      </ul>
    </div>
</div>
);

RestaurantFavItem.propTypes = {
restaurantName: PropTypes.string,
favItems: PropTypes.array.isRequired,
handleChange: PropTypes.func
};

RestaurantFavItem.defaultProps = {
  restaurantName: "Saravana Bhavan",
  favItems: ["Idly", "Dosa"]
};

export default RestaurantFavItem;
