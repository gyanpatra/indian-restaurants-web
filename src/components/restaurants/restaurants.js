import React, {PropTypes} from 'react';
import RestaurantFavItems from './restaurantFavItems';

const Restaurants = ({restaurantDetails}) => (
  <div className="field">
     <div>
          {restaurantDetails.map((restaurantDetail, i) => <RestaurantFavItems key={i} {...restaurantDetail} />)}
     </div>
   </div>
);

Restaurants.propTypes = {
restaurantDetails: PropTypes.array.isRequired
};

Restaurants.defaultProps = {
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

export default Restaurants;
