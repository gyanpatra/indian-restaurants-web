const mongoose = require('mongoose');
const functions = require('firebase-functions');

// Get RUN TIME ENVIRONMENT VARIABLE as configured below
//firebase functions:config:set mongodb.url=""
const mongoUri = functions.config().mongodb.url;
console.log(" The mongo config url is "+mongoUri)

mongoose.connect(mongoUri,  { keepAlive: 1 } );
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});



/**
 * RestaurantsGeo Schema
 */
const RestaurantsGeoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  geo: {
    type: { type: String, enum: ['Point', 'LineString', 'Polygon'], default: 'Point' },
    coordinates: Array
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


RestaurantsGeoSchema.method({
});

RestaurantsGeoSchema.statics = {
  findWithinMiles({ withinRadiusInMiles = 100, latitude, longitude } = {}) {
    const radiusInRadians = withinRadiusInMiles / 3963.2;
    console.log("Data sent to Mongoose latitude : "+latitude+" longitude : "+longitude)
    const fieldsToBeReturned = { name: 1, foodiesRecommendation: 1, geo: 1, website: 1, _id: 0 };
    const query = {
      geo: {
        $geoWithin: {
          $centerSphere: [[longitude, latitude], radiusInRadians]
        }
      }
    };
    try {
      const dataToBeReturned = this.find(query, fieldsToBeReturned);
      console.log("In RestaurantsGeoModel after Query data ",dataToBeReturned);
      return dataToBeReturned;
    } catch(err) {
      console.log("error in geo model ",err);
    }

  }
};

module.exports = mongoose.model('RestaurantsGeo', RestaurantsGeoSchema);
