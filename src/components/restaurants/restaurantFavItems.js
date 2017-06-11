import React, {PropTypes} from 'react';

const RestaurantFavItem = ({name, favItems}) => (
  <div className="container">
    <div className="red">
      <label>{name}</label>
    </div>
    <div className="blue">
      <ul>
      {favItems.map((favItem, i) => <li key={i}>{favItem}</li>)}
      </ul>
    </div>
</div>
);

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
