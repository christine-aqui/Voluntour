console.log('connected');
let capCity = '';
let cityCode = '';
let cityStae = '';
let cityLat = 0;
let cityLon = 0;
let userSelected = '';
let mImage = '';
let mName = '';
let mDesciption = '';
let mStatus = '';
let mLink = '';
let meetupHTML = `<div class="meetup_event hvr-rectangle-out hvr-box-shadow-outset">
                    <div class="group1">
                      <img class="meetup_image" src="${mImage}" alt="">
                      <h5 class="meetup_name">${mName}</h5>
                    </div>
                    <div class="group2">
                      <div class="meetup_desciption">${mDesciption}</div>
                      <div class=" subgroup">
                        <h6 class="meetup_status">${mStatus}</h6>
                        <a class="meetup_link" href="${mLink}"target="_blank">More Infor</a>
                      </div>
                    </div>
                  </div>`;
//
// let key = '5511ae6b581be2e6b0625f298b7d62ae';
let unit = 'metric';
// docs  https://openweathermap.org/forecast16
// let x = 0;
let weatherHTML = `<div class="cityWeather">
                      <img class="weatherIcon" src="" alt="">
                      <h5 class="weatherText"></h5>
                      <h5 class="WeatherTemp"></h5>
                      <h6 class="weatherDate"></h6>
                    </div>`;
let weatherCycle = [];
let wIcon = [];
let wText = [];



//
//
$('#logo').hide();
$('.container').hide();

$(document).ready(function () {
  console.log("document ready!");
  //
  function cityInfo(obj) {
    capCity = obj.capitalCity;
    cityCode = obj.countryCode1;
    cityLat = obj.lat;
    cityLon = obj.lon;
    // if(obj === 'Hawaii'){
    cityStae = obj.state;
    // }
    return capCity, cityCode, cityLat, cityLon, cityStae;
  }
  setTimeout(function () { // logo is loaded
    $('#logo').show();
    $('#logo').addClass('animated fadeIn');
    //
    setTimeout(() => { // start code
      $('.container').show();
      //
      document.querySelector('#formBtn').addEventListener('click', function (e) {
        e.preventDefault();
        //
        //
        userSelected = $('#region-list').val();
        console.log('user selected: ', userSelected);
        $('#windowTitle').text(`Voluntour - ${userSelected}`); // updtes the title bar =]
        switch (userSelected) {
          case "Malawi":
            cityInfo(malawi);
            // console.log('City name: ', capCity);
            break;
            //
          case "Jordan":
            cityInfo(jordan);
            // console.log('City name: ', capCity);
            break;
            //
          case "Nepal":
            cityInfo(nepal);
            // console.log('City name: ', capCity);
            break;
            //
          case "Fiji":
            cityInfo(fiji);
            // console.log('City name: ', capCity);
            break;
            //
          case "Hawaii":
            cityInfo(hawaii);
            // console.log('City name: ', capCity);
            break;
            //
          case "Peru":
            cityInfo(peru);
            // console.log('City name: ', capCity);
            break;
            //
          case "Cambodia":
            cityInfo(cambodia);
            // console.log('City name: ', capCity);
            break;
            //
          case "India":
            cityInfo(india);
            // console.log('City name: ', capCity);
            break;
            //
          case "Thailand":
            cityInfo(thailand);
            // console.log('City name: ', capCity);
            break;
            //
          case "Ecuador":
            cityInfo(ecuador);
            // console.log('City name: ', capCity);
            break;
            //
          case "Kenya":
            cityInfo(kenya);
            // console.log('City name: ', capCity);
            break;
            //
          case "Senegal":
            cityInfo(senegal);
            // console.log('City name: ', capCity);
            break;
            //
          case "Philippines":
            cityInfo(philippines);
            // console.log('City name: ', capCity);
            break;
            //
        }
        // checks to see if country is selected. if no country is selected then do notting
        if (userSelected != "Country") {
          // Ajax start here
          let meetupURL = `https://cors.io/?https://api.meetup.com/2/open_events?`;
          $.ajax({
            url: meetupURL,
            method: 'GET',
            data: {
              key: '116b73e106c122e802f104e7767213',
              city: capCity,
              state: cityStae,
              country: cityCode,
              // category: 1, //hard coded temp
              page: 10,
              sign: 'true',
            }
          }).done(function (response) {
            // takes response string and converts it to a JavaScript object
            let myResp = JSON.parse(response);
            let meetUpResults = myResp.results;
            if (myResp.results.length != 0) {
              console.log('meetup: ', meetUpResults);
//
              for (let result of meetUpResults) {
                let eventStatus = `Status: ${result.status}`;
                mImage = result.photo_url;
                displayMeetup(result, eventStatus);
              }
            } else {
              console.log("no events");
            }
            //
          });
          //
        } else {
          console.log("notting");
        }
        // end of Meetup api
        //
        //
        // Lisa's Code Here
        getWeather();
        //
        //
        //
        //
        //
        // admeh's Code Here
        // Admeds code
        // News Api
        let newsKey = 'd91452c6c0c0450dbd402a43d19d7905';
        let newsURL = `https://newsapi.org/v2/everything?q=${userSelected}&apikey=${newsKey}`;
        $.ajax({
          url: newsURL,
          method: 'GET',
          language: 'en',
          sortBy: 'relevancy',
        }).done(function (newsResponse) {
          // console.log('news: ', newsResponse);
        });
        // advisoryAPI
        let advisoryKey = '7csv43cjcwbtnfyspr6n6gjd';
        let advisoryURL = `https://api.tugo.com/v1/travelsafe/countries/${cityCode}`;
        $.ajax({
          url: advisoryURL,
          method: 'GET',
          headers: {
            "X-Auth-API-Key": advisoryKey
          }
        }).done(function (advisoryResponse) {
          // console.log('advisory: ', advisoryResponse);
        });
        //
        //
        //
        //
        //
        // usama's Code Here
        //
        //
        //
      });
    }, 400);
  }, 500);
  //
});
// end of doc ready
function getWeather() {
  let key = '5511ae6b581be2e6b0625f298b7d62ae';
  let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${capCity},${cityCode}&cnt=6&units=${unit}&appid=${key}`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    console.log('Open weather: ', response);
    let wCondition = '';

    let weatherArray = response.list;
    for (let wDay of weatherArray) {
      $('#weather-info').append(weatherHTML);
      //
      for (let thatDay of wDay.weather) {
        console.log(wDay);
        weatherCycle = wDay;
        switch (thatDay.main) {
          case 'Clouds':
            wCondition = './assets/images/Cloudy.png';
            break;
          case 'Rain':
            wCondition = './assets/images/Rain.png';
            break;
          case 'Clear':
            wCondition = './assets/images/Sunny.png';
            break;
          case 'Snow':
            wCondition = './assets/assets/images/';
            break;
          default:
            break;
        }
      }
    }
    $('.weatherIcon').attr("src", wCondition);
    $('.weatherText').text(weatherCycle.weather[0].main);
    $('.WeatherTemp').text(weatherCycle.main.temp + '°C');
    $('.weatherDate').text(weatherCycle.dt_txt);
  });
}

function displayMeetup(mData, mstate){
  $('#meetup-events').append(meetupHTML);
  $('.meetup_image').attr("src", mData.photo_url);
  $('.meetup_image').attr("alt", "event image");
  $('.meetup_name').text(mData.name);
  $('.meetup_desciption').html(mData.description);
  $('.meetup_status').text(mstate);
  $('.meetup_link').attr('href', mData.event_url);
}