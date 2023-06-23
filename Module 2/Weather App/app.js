const request = require("request");


const url =
  "https://api.weatherapi.com/v1/current.json?key=55d3aee711294a4f981172318232106&q=Kakinada&aqi=yes&units=metric";

/* --- 1 ---  */
// request({url: url}, (err, res) => {
//     const data = JSON.parse(res.body);
//     console.log("Location Data :", data.location);
//     console.log("Current Data :", data.current);

// })

//JSON.parse() is no need when we used json:true in request options
// request({url: url, json:true}, (err, res) => {
//     const data = (res.body);
//     console.log("Weather Condition In " + data.location.name)
//     console.log("It's Currently " + data.current.temp_c + " °C out. But it feels like " + data.current.feelslike_c + " °C Out");
//     console.log("Condition Seems Like : " + data.current.condition)
// })

//Geocoding
//Address =>lat/long -> weather
//Goal : Print the lat/long for Los Angles

const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FuZGVlcHNlZXJhbSIsImEiOiJjbGo3MHljdzUwYzZ3M2VtdWhoeWx1dHRhIn0.gbu3CSiAITPvntFmjYFeJw&limit=1"

request({url:geoCodeUrl, json:true}, (err, res) => {
  const latitude = res.body.features[0].center[0];
  const longitude = res.body.features[0].center[1];
  console.log("GeoLocation :" + latitude + " " +longitude);
})