const RestaurantsGeo =  require('./restaurants-geo-model');

function findWithinMiles(geoData) {
  const { withinRadiusInMiles = 10, latitude, longitude } = geoData;
  console.log("POST body in findWithinMiles "+JSON.stringify(geoData))
  // const withinRadiusInMiles = 10;
  // const latitude = 37.6305;
  // const longitude = -122.4111;
  if (!latitude || !longitude) {
    return Promise.reject("No latitude or longitude info "+JSON.stringify(geoData))
  }
  return new Promise((resolve,reject) => {
    RestaurantsGeo.findWithinMiles({ withinRadiusInMiles, latitude, longitude })
      .then(restaurantsData => {
        console.log("Data sent from controller latitude : "+latitude+" longitude : "+longitude)
        restaurantsData = JSON.parse(JSON.stringify(restaurantsData));
        const postProcessedData = postProcessData(restaurantsData, geoData);
        resolve(postProcessedData)
      })
      .catch(e => {
        console.log("Data sent from controller latitude : "+latitude+" longitude : "+longitude)
        console.log("Error caught in controller when querying ",e)
        reject(e)
      });
  });

}

function postProcessData(data, userGeoData) {
  let postProcessedData = data.map(singleRestaurantData => {
    let restaurantGeo = {
      latitude: singleRestaurantData.geo.coordinates[1],
      longitude: singleRestaurantData.geo.coordinates[0]
    }

    singleRestaurantData.distanceInMiles = calculateDistanceBetweenTwoPoints(restaurantGeo, userGeoData).toFixed(2);
    singleRestaurantData.directionURL = createGoogleDirectionURL(restaurantGeo);
    return singleRestaurantData;
  });
  // sort by value
  postProcessedData.sort(function (a, b) {
    return a.distanceInMiles - b.distanceInMiles;
  });
  return postProcessedData;
}

function createGoogleDirectionURL(restaurantsGeo) {
  return `https://www.google.com/maps/search/?api=1&query=${restaurantsGeo.latitude},${restaurantsGeo.longitude}`;
}

function calculateDistanceBetweenTwoPoints (restaurantGeo, userGeo) {
  const pi = Math.PI / 180;
  const kiloMetersToMilesConversionFactor = 0.621371;
  const cos = Math.cos;
  let a = 0.5 - cos((restaurantGeo.latitude - userGeo.latitude) * pi)/2 +
          cos(userGeo.latitude * pi) * cos(restaurantGeo.latitude * pi) *
          (1 - cos((restaurantGeo.longitude - userGeo.longitude ) * pi))/2;
  let distanceInKiloMeters = 12742 * Math.asin(Math.sqrt(a));
  let distanceInMiles = distanceInKiloMeters * kiloMetersToMilesConversionFactor;
  return distanceInMiles;
}

module.exports = { findWithinMiles };
