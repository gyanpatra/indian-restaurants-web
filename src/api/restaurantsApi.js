class RestaurantsApi {

  static getRestaurantsForGivenGeo(geoInfo) {
    const request = new Request('https://indian-restaurants-api.herokuapp.com/api/shops/restaurants/position', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        latitude: geoInfo.latitude,
        longitude: geoInfo.longitude,
        withinRadiusInMiles: geoInfo.withinRadiusInMiles
      })
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default RestaurantsApi;
