import * as types from '../actions/actionTypes';

const INITIAL_STATE = {};

export default function geolocation(state = INITIAL_STATE, action) {

  switch(action.type) {
    case types.RETRIEVED_GEOLOCATION_SUCCESSFULLY:
      return Object.assign({}, state, {
        latitude: action.latitude,
        longitude: action.longitude
      });
    default:
      return state;
  }
}
