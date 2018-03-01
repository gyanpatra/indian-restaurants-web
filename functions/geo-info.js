const fetch = require("node-fetch");

function getGeoInfoFromIP(ip) {
  const url = "http://freegeoip.net/json/"+ip;
  return new Promise((resolve,reject) => {
    fetch(url)
      .then(response => response.json())
      .then(responseJSON => resolve(responseJSON))
      .catch(err => reject(err));
  });
};

module.exports = {
  getGeoInfoFromIP
}
