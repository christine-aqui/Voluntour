console.log('connected');
// -----------------------------------------------------------------------------
//
//
// testing api for open weather
// Open Weather key = 5511ae6b581be2e6b0625f298b7d62ae
var key = '5511ae6b581be2e6b0625f298b7d62ae';
var destination = 'toronto';
var destCode = 'CA';
var unit = 'metric';
var queryURL= `https://api.openweathermap.org/data/2.5/forecast?q=${destination},${destCode}&cnt=10&units=${unit}&appid=${key}`;
// docs  https://openweathermap.org/forecast16
$.ajax({
  url: queryURL,
  method: "GET"
}).done(function (response) {
  console.log('URL: ',queryURL);
  console.log(response);
  console.log('city name: ' , response.city.name);
  console.log('country code: ', response.city.country);
  console.log('city day index 0: ', response.list[0].main.temp +'°C');
  console.log('weather description: ', response.list[0].weather[0].main);
});
//
//
// -----------------------------------------------------------------------------
//
//
// testing newsapi
//  docs https://newsapi.org/docs/get-started
var newsKey = 'ab40f06643634b82bfe50ad70def3943';
var newURL = `https://newsapi.org/v2/top-headlines?country=${destCode}&apiKey=${newsKey}`;
$.ajax({
  url: newURL,
  method: "GET"
}).done(function (response){
  console.log('URL: ', newURL);
  console.log('responce: ',response);
  console.log('author: ',response.articles[0].author);
  console.log('title: ',response.articles[0].title);
  console.log('description: ',response.articles[0].description);
  console.log('url: ',response.articles[0].url);
  console.log('urlToImage: ',response.articles[0].urlToImage);
});
//
//
// -----------------------------------------------------------------------------
//
//
// testing Travel Advisory API