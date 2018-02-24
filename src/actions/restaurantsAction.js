import * as types from './actionTypes';
import RestaurantsApi from '../api/restaurantsApi';


export function getRestaurantsForGivenGeoSuccess(responseRestaurants, geoInfo) {
  return {
    type: types.GET_RESTAURANTS_FOR_GEO_SUCCESS,
    restaurants: responseRestaurants,
    geoInfo: geoInfo
  }
}

export function getRestaurantsForGivenGeo(latitude, longitude) {
  return (dispatch, getState) => {
    return RestaurantsApi.getRestaurantsForGivenGeo({latitude, longitude}).then(responseRestaurants => {
      dispatch(getRestaurantsForGivenGeoSuccess(responseRestaurants, {latitude, longitude}));

      return responseRestaurants;
    }).catch(error => {
      throw(error);
    });
  };
}

export function getRestaurantsWithoutGeo() {
  return (dispatch, getState) => {
    return RestaurantsApi.getRestaurantsWithoutGeo()
            .then(responseRestaurants => {
              dispatch(getRestaurantsForGivenGeoSuccess(responseRestaurants, {}));
              return responseRestaurants;
            })
            .catch(error => {
              throw(error);
            })
  }
}
