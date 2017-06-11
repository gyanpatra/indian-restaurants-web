import {combineReducers} from 'redux';
import geolocation from "./geolocation";
import restaurantsInfo from "./restaurantReducer";

const rootReducer = combineReducers({
  geolocation,
  restaurantsInfo
});

export default rootReducer;
