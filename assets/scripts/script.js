console.log('connected');
let capCity = '';
let cityCode = '';
let cityStae = '';
let cityLat = 0;
let cityLon = 0;
let userSelected = '';
<<<<<<< HEAD
let mImage = '';
let mName = '';
let mDesciption = '';
let mStatus = '';
let mLink = '';
let weatherArray = [];
let meetupHTML = `
<div class="meetup_event hvr-rectangle-out hvr-box-shadow-outset">
<div class="group1">
<img class="meetup_image" src="" alt="">
<h5 class="meetup_name"></h5>
</div>
<div class="group2">
<div class="meetup_desciption"></div>
<div class="subgroup">
<h6 class="meetup_status"></h6>
<a class="meetup_link" href=""target="_blank">More Infor</a>
</div>
</div>
</div>`;
let noMeetup = ``;
//
// let key = '5511ae6b581be2e6b0625f298b7d62ae';
let unit = 'metric';
// docs  https://openweathermap.org/forecast16
// let x = 0;
let weatherHTML = `
<div class="cityWeather hvr-underline-from-center">
<img class="weatherIcon" src="" alt="">
<h5 class="weatherText"></h5>
<h5 class="WeatherTemp"></h5>
<h6 class="weatherDate"></h6>
</div>`;
let wCondition = '';
let weatherCycle = [];
let wIcon = [];
let wText = [];
// ---------------------------------------------------------------------------


=======
>>>>>>> 896c6ccd0701004cae4bb75ef0b1c87393dc8f86
//
//
$('#logo').hide();
$('.container').hide();
// $('#map').hide();
// ---------------------------------------------------------------------------
$(document).ready(function () {
  console.log("document ready!");
  setTimeout(function () { // logo is loaded
    $('#logo').show();
    $('#logo').addClass('animated fadeIn');
    //
    setTimeout(() => { // start code
      $('.container').show();
      //
      document.querySelector('#formBtn').addEventListener('click', function (e) {
        e.preventDefault();
        // call database
        $(document).ready(function () {
          var database = firebase.database();
          var itineraryData;
          database.ref().on("value", function (snapshot) {
            itineraryData = snapshot.val();
            console.log('The itinerary Data: ',itineraryData);
          });
        });
        //on button press remove any existing content from before.
        $(".cityWeather").remove();
        $(".meetup_event").remove();
        $(".zeorMeets").remove();
        //
        //
        userSelected = $('#region-list').val();
        console.log('user selected: ', userSelected);
<<<<<<< HEAD
        $('#windowTitle').text(`Voluntour - ${userSelected}`); // updtes the title bar =]
        uSelected(userSelected);
        // checks to see if country is selected. if no country is selected then do notting
        if (userSelected != "Country") {
          getMeetup();
        } else {
          console.log("No country selected");
        } // end of Meetup api
        //
        //
        // Lisa's Code Here =]
        getWeather();
        //
        //
        // admeh's Code Here
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
        // usama's Code Here
        initMap();
        //
        //
        //
=======

        switch (userSelected) {
          case "Malawi":
            cityInfo(malawi);
            console.log('City name: ', capCity);
            break;
            //
          case "Jordan":
            cityInfo(jordan);
            console.log('City name: ', capCity);
            break;
            //
          case "Nepal":
            cityInfo(nepal);
            console.log('City name: ', capCity);
            break;
            //
          case "Fiji":
            cityInfo(fiji);
            console.log('City name: ', capCity);
            break;
            //
          case "Hawaii":
            cityInfo(hawaii);
            console.log('City name: ', capCity);
            break;
            //
          case "Peru":
            cityInfo(peru);
            console.log('City name: ', capCity);
            break;
            //
          case "Cambodia":
            cityInfo(cambodia);
            console.log('City name: ', capCity);
            break;
            //
          case "India":
            cityInfo(india);
            console.log('City name: ', capCity);
            break;
            //
          case "Thailand":
            cityInfo(thailand);
            console.log('City name: ', capCity);
            break;
            //
          case "Ecuador":
            cityInfo(ecuador);
            console.log('City name: ', capCity);
            break;
            //
          case "Kenya":
            cityInfo(kenya);
            console.log('City name: ', capCity);
            break;
            //
          case "Senegal":
            cityInfo(senegal);
            console.log('City name: ', capCity);
            break;
            //
          case "Philippines":
            cityInfo(philippines);
            console.log('City name: ', capCity);
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
              category: 1, //hard coded temp
              page: 10,
              sign: 'true',
            }
          }).done(function (response) {
            // takes response string and converts it to a JavaScript object
            let myResp = JSON.parse(response);
            let meetUpResults = myResp.results;
            if (myResp.results.length != 0) {
              console.log('meetup: ', meetUpResults);
              let newDiv = "<div class='meetup-event'></div>";
              let newP = '<p>';
              let newH3 = '<h3>';
              let newImg = `<img class='meetup-image'>`;
              for (let result of meetUpResults) {
                // let meetupImage = meetUpResults[result].photo_url;
                console.log(result.name);
                $('#meetup-events').append(newDiv);
                $('.meetup-event').append(newImg);

              }
            } else {
              console.log("no events");
            }
            // Pushing the html
            // I want the results[i].name
            // results[i].photo_url
            // results[i].status
            // results[i].description
            // results[i].event_url

          });
          //
        } else {
          console.log("notting");
        }

      });
      // end of Meetup api
      //
      //
      // Lisa's Code Here

      //
      //
      //
      //
      //
      // Ahmed's Code Here
      // News Api
      let newsKey = 'd91452c6c0c0450dbd402a43d19d7905';
      let newsURL = `https://newsapi.org/v2/everything?q=${userSelected}&apikey=${newsKey}`;
      $.ajax({
        url: newsURL,
        method: 'GET',
        language: 'en',
        sortBy: 'relevancy',
      }).done(function (newsResponse) {
        console.log('news: ', newsResponse);
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
        console.log('advisory: ', advisoryResponse);
>>>>>>> 896c6ccd0701004cae4bb75ef0b1c87393dc8f86
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
    }, 400);
  }, 500);
  //
});
// end of doc ready

// ----------------------------------------------------------------------------
function cityInfo(obj) {
  capCity = obj.capitalCity;
  cityCode = obj.countryCode1;
  cityLat = obj.lat;
  cityLon = obj.lon;
  cityStae = obj.state;
  return capCity, cityCode, cityLat, cityLon, cityStae;
}

function uSelected(uSel) {
  switch (uSel) {
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
};
// -----------------------------------------------------------------------------
function displayHTML(arrmData) {
  $('#meetup-events').append(arrmData);
};

function getMeetup() {
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
      page: 5,
      sign: 'true',
    }
  }).done(function (response) {
    // takes response string and converts it to a JavaScript object
    let myResp = JSON.parse(response);
    let meetUpResults = myResp.results;
    if (myResp.results.length != 0) {
      console.log('meetup: ', meetUpResults);
      meetUpResults.forEach(element => {
        // console.log(element);
        getData(element);
        displayHTML(meetupHTML);
      });
    } else {
      console.log("no events");
      noMeetup = `<div class="zeorMeets">
      <h3>Sorry, Looks like no events were found on
      Meetups.com for ${capCity}, ${cityCode}.</h3></div>`;
      $('#meetup-events').append(noMeetup);
    }
    //
  });
};

function getData(data) {
  return meetupHTML =
    `
    <div class="meetup_event hvr-rectangle-out hvr-box-shadow-outset">
    <div class="group1">
    <img class="meetup_image" src="${data.photo_url}" alt="">
    <h5 class="meetup_name">${data.name}</h5>
    </div>
    <div class="group2">
    <div class="meetup_desciption">${data.description}</div>
    <div class="subgroup">
    <h6 class="meetup_status">Status: ${data.status}</h6>
    <a class="meetup_link" href="${data.event_url}" target="_blank">More Info</a>
    </div>
    </div>
    </div>`;
};
// -----------------------------------------------------------------------------
function displayWHTML(arrwData) {
  $('#weather-info').append(arrwData);
};

function getWeatherdata(data, x) {
  return weatherHTML =
    `
<div class="cityWeather hvr-underline-from-center">
<img class="weatherIcon" src="${x}" alt="">
<h5 class="weatherText">${data.weather[0].main}</h5>
<h5 class="WeatherTemp">${data.main.temp}'°C'</h5>
<h6 class="weatherDate">${data.dt_txt}</h6>
</div>`;
};

function getCondition(wcData) {
  switch (wcData.weather[0].main) {
    case 'Clouds':
      wCondition = './assets/images/Cloudy.png';
      // console.log(wCondition);
      break;
    case 'Rain':
      wCondition = './assets/images/Rain.png';
      // console.log(wCondition);
      break;
    case 'Clear':
      wCondition = './assets/images/Sunny.png';
      // console.log(wCondition);
      break;
    case 'Snow':
      wCondition = './assets/assets/images/';
      // console.log(wCondition);
      break;
    default:
      console.log(wCondition);
      break;
  };
};

function getWeather() {
  let key = '5511ae6b581be2e6b0625f298b7d62ae';
  let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${capCity},${cityCode}&cnt=5&units=${unit}&appid=${key}`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    console.log('Open weather: ', response);
    weatherArray = response.list;
    weatherArray.forEach(report => {
      // console.log('wReport: ',report);
      getCondition(report);
      getWeatherdata(report, wCondition);
      displayWHTML(weatherHTML);
    });
  });
};
// ----------------------------------------------------------------------------
function initMap() {
  let mapCity = {
    lat: cityLat,
    lng: cityLon
  };
  // The map, centered at Malawai
  let map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 7,
      center: mapCity
    });
  // The marker, positioned at Malawai
  let marker = new google.maps.Marker({
    position: mapCity,
    map: map
  });
}