console.log('Test File connected');
// -----------------------------------------------------------------------------
//
$(document).ready(function () {
  // testing api for open weather
  // Open Weather key = 5511ae6b581be2e6b0625f298b7d62ae
  var key = '5511ae6b581be2e6b0625f298b7d62ae';
  var destination = 'toronto';
  var destCode = 'CA';
  var unit = 'metric';
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${destination},${destCode}&cnt=10&units=${unit}&appid=${key}`;
  // docs  https://openweathermap.org/forecast16
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    // console.log('URL: ',queryURL);
    console.log('Open weather: ',response);
    // console.log('city name: ' , response.city.name);
    // console.log('country code: ', response.city.country);
    // console.log('city day index 0: ', response.list[0].main.temp +'°C');
    // console.log('weather description: ', response.list[0].weather[0].main);
  });
  //
  // -----------------------------------------------------------------------------
  //
  // testing newsapi
  //  docs https://newsapi.org/docs/get-started
  var newsKey = 'ab40f06643634b82bfe50ad70def3943';
  var newURL = `https://newsapi.org/v2/top-headlines?country=${destCode}&apiKey=${newsKey}`;
  $.ajax({
    url: newURL,
    // method: "GET"
  }).done(function (response) {
    // console.log('URL: ', newURL);
    console.log('News responce: ',response);
    // console.log('author: ',response.articles[0].author);
    // console.log('title: ',response.articles[0].title);
    // console.log('description: ',response.articles[0].description);
    // console.log('url: ',response.articles[0].url);
    // console.log('urlToImage: ',response.articles[0].urlToImage);
  });
  //
  // -----------------------------------------------------------------------------
  //
  // testing Travel Advisory API
  //  doc http://developer.tugo.com/docs
  //  http://developer.tugo.com/docs/travelsafe/v1/country
  destCode = 'GR'; //hard coded
  var tugoURL = `https://api.tugo.com/v1/travelsafe/countries/${destCode}`;
  $.ajax({
    url: tugoURL,
    method: "GET",
    headers: {
      "X-Auth-API-Key": 'szjrrx4ky98e734bnpxuwbc5'
    }
  }).done(function (response) {
    // console.log(tugoURL);
    if (response) {
      console.log('Tugo response: ', response);
      // console.log('Tugo advisories ', response.advisories);
      // console.log('Tugo advisories ', response.advisories.description);
      // console.log('Tugo ', response.climate);
      // console.log('Tugo advisoryText ', response.advisoryText);
      // console.log('Tugo regionalAdvisory ', response.regionalAdvisory);
    }
  });
  // $.get(`https://api.tugo.com/v1/travelsafe/countries/GR`, function(data, status){
  //   console.log(data);
  // })
  //
  // ____
  //
  //ticketmaster API
  // https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
  // tmURL = `https://app.ticketmaster.com/discovery/v2/events`;
  $.ajax({
    url: "https://app.ticketmaster.com/discovery/v2/events",
    dataType: "json",
    method: "GET",
    data: {
      apikey: "fUzdQSx74YWDKdGXg19saW751ZKVQQE7",
      // format: "jsonp",
      city: destination,
      classificationName: "Miscellaneous",
      // startDateTime: `${userStartDate}T12:30:00Z`,
      // endDateTime: `${userEndDate}T23:30:00Z`
    }
  }).done(function (response) {
    console.log('Ticketmaster response: ', response);
  });
});