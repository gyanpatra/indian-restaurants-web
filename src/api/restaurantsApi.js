
class RestaurantsApi {

  static getRestaurantsForGivenGeo(geoInfo) {
    const queryParam = "?latitude="+geoInfo.latitude+"&longitude="+geoInfo.longitude;
    const herokuAPIENDPOINT = "https://indian-restaurants-api.herokuapp.com/api/shops/restaurants/position"+queryParam;
    const googleFireBaseAPIEndPoint = "https://us-central1-indian-restaurants-nearby.cloudfunctions.net/restaurantsApi"+queryParam;

    const request = new Request(googleFireBaseAPIEndPoint, {
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

  static getRestaurantsWithoutGeo() {
    const url = "https://us-central1-indian-restaurants-nearby.cloudfunctions.net/restaurantsApiWithoutGeo";
    return fetch(url).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default RestaurantsApi;
