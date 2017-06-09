import * as types from './actionTypes';
import RestaurantsApi from '../api/restaurantsApi';


export function getRestaurantsForGivenGeoSuccess(responseRestaurants) {
  return {type: types.GET_RESTAURANTS_FOR_GEO_SUCCESS, responseRestaurants}
}

export function getRestaurantsForGivenGeo(geoInfo) {
  return function (dispatch) {
    return RestaurantsApi.getRestaurantsForGivenGeo(geoInfo).then(responseRestaurants => {
      dispatch(getRestaurantsForGivenGeoSuccess(responseRestaurants));
      return responseRestaurants;
    }).catch(error => {
      throw(error);
    });
  };
}
