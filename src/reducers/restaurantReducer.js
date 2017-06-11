import * as types from '../actions/actionTypes';

const INITIAL_STATE = {};

export default function geolocation(state = INITIAL_STATE, action) {

  switch(action.type) {
    case types.GET_RESTAURANTS_FOR_GEO_SUCCESS:
      return Object.assign({}, state, {
        restaurants: action.restaurants,
        geoInfo: action.geoInfo
      });
    default:
      return state;
  }
}
