const functions = require("firebase-functions")
const express = require("express");
const requestIp = require('request-ip');
const cors = require('cors')({origin: true});
const restaurantsController = require("./restaurants-controller");
const geoInfo = require("./geo-info");


//
//
// /* Express */
// const app1 = express()
//
//


//const api1 = functions.https.onRequest(app1)

const restaurantsApi = functions.https.onRequest((req, res) => {
//enabling CORS

  cors(req, res, () => {});

  console.log("latitude Query param "+req.query.latitude)
  console.log("longitude Query param "+req.query.longitude)

  console.log(" In index.js with req.body "+JSON.stringify(req.body))

  const geoData = {
    latitude: req.query.latitude,
    longitude: req.query.longitude
  }
  if(req.body) {
    geoData.latitude = req.body.latitude;
    geoData.longitude = req.body.longitude;
  }

  if (! geoData.latitude || !geoData.longitude) {
    return responseFunction(res, {"status": "error", "msg": "not valid input"}, 503)
  }


  return restaurantsController
          .findWithinMiles(geoData)
          .then(data => responseFunction(res, data, 200))
          .catch(err => responseFunction(res, err, 500))
});

const restaurantsApiWithoutGeo = functions.https.onRequest((req, res) => {
  cors(req, res, () => {});
  const clientIp = requestIp.getClientIp(req);
  console.log("The clientIp for this request is "+clientIp);
  return geoInfo.getGeoInfoFromIP(clientIp)
    .then(geoData => {
      restaurantsController
              .findWithinMiles(geoData)
              .then(data => responseFunction(res, data, 200))
              .catch(err => responseFunction(res, err, 500))
    })
    .catch(err => console.log("error in restaurantsApiWithoutGeo ",err))
});

module.exports = {
  //api1,
  restaurantsApi,
  restaurantsApiWithoutGeo
}

function responseFunction(res, items, code) {
   return Promise.resolve(res.status(code)
       .type('application/json')
       .send(items))
}
