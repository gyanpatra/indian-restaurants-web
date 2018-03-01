import * as types from './actionTypes';
import { getRestaurantsForGivenGeo } from "./restaurantsAction";

export const handleGeolocationCoords = (coords) => {
    return (dispatch, getState) => {
      dispatch(getRestaurantsForGivenGeo(coords.latitude, coords.longitude));

      return {
        type: types.RETRIEVED_GEOLOCATION_SUCCESSFULLY,
        latitude: coords.latitude,
        longitude: coords.longitude
      };
    };
};

export const successfullyRetreivedGeolocation = (coords) => ({
  type: types.RETRIEVED_GEOLOCATION_SUCCESSFULLY,
  coords: coords
});

export const failedToRetrieveGeolocation = (coords) => ({
  type: types.RETRIEVED_GEOLOCATION_FAILED,
  coords: coords
});
