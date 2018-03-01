
const restaurantsController = require("../restaurants-controller");
const geoInfo = require("../geo-info");


const clientIp = "216.207.42.140";

geoInfo.getGeoInfoFromIP(clientIp)
  .then(geoData => {
    restaurantsController
            .findWithinMiles(geoData)
            .then(restaurantsData => {
              console.log(restaurantsData)

            })
            .catch(err => console.log(err))
  })
  .catch(err => console.log("error in restaurantsApiWithoutGeo ",err))
