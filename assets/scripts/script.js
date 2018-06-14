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
let itineraryData;
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
</div>`;
// <h6 class="weatherDate"></h6>
let wCondition = '';
let weatherCycle = [];
let wIcon = [];
let wText = [];
let advisoryGeneral = '';
let advisoryHealth = '';
let advisoryHTML = `
<div id="advisory-body">
<div class="media">
<img class="mr-3" src="assets/images/warning.png" alt="Warning Sign">  <div class="media-body">
    <h5 class="mt-0">Travel Advisory</h5>
    <span></span>
  </div>
</div>
`;
let newsHTML = '';
// ---------------------------------------------------------------------------
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
      $('#map').addClass('inactive');
      $('#returnTrips').addClass('inactive');
      $('#contact-form').addClass('inactive');
      //
      document.querySelector('#formBtn').addEventListener('click', function (e) {
        e.preventDefault();
        //on button press remove any existing content from before.
        $(".cityWeather").remove();
        $(".meetup_event").remove();
        $(".zeorMeets").remove();
        $(".rTrip").remove();
        // $('#contact-form').remove();
        //
        //
        userSelected = $('#region-list').val();
        console.log('user selected: ', userSelected);
        $('#windowTitle').text(`Voluntour - ${userSelected}`); // updtes the title bar =]
        uSelected(userSelected);
        // checks to see if country is selected. if no country is selected then do notting
        if (userSelected != "Country") {
          getMeetup();
          getSpanshot(userSelected);
          $('#returnTrips').removeClass('inactive');
          $('#returnTrips').addClass('active');
          $('#map').removeClass('inactive');
          $('#map').addClass('active');
          $('#contact-form').removeClass('inactive');
          $('#contact-form').addClass('active');
          //
        } else {
          console.log("No country selected");
        } // end of Meetup api
        getWeather();
        renderMap();
        getAdvisory();
        getNews();
        //
        //
        $('#mail').ready(function () {
          function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          };
          $('#mail').on('click', () => {
            $('#mail').addClass('wrong-input')
          });
          $('#mail').change(() => {
            var email = $('#mail').val()
            if (validateEmail(email)) {
              $('#mail').addClass('right-input');
            }
          })
        });
        //
      });
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
      // console.log(itineraryData);
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
      text: 'volunteer',
      // text: 'charitable',
      // text: 'philanthropy',
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
        // setTimeout(() => {
        displayHTML(meetupHTML);
        // }, 1000);
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
// advisoryAPI
function getAdvisory() {
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
    let advisoryGeneral = advisoryResponse.advisories.description;
    let advisoryHealth = advisoryResponse.health.description;
    console.log(advisoryGeneral);
    let advisoryHTML = `
    <div id="advisory-body">
    <h4>Canadian Travel Advisory for ${userSelected}</h4>
    <div class="media border border-danger">
    <img class="mr-3" src="assets/images/warning.png" alt="Warning Sign">  <div class="media-body">
        <h5 class="mt-0">Travel Advisory</h5>
        <span>${advisoryGeneral}</span>
      </div>
    </div>`;
    $('#travel-advisory').empty();
    $('#travel-advisory').append(advisoryHTML);
    console.log(advisoryHealth);
  });
}

function getNews() {
  let newsKey = 'd91452c6c0c0450dbd402a43d19d7905';
  let newsURL = `https://newsapi.org/v2/everything?q=${userSelected}&language=en&sortBy=relevancy&sources=cbc-news,bbc-news,cnn&apikey=${newsKey}`;
  $.ajax({
    url: newsURL,
    method: 'GET',
    language: 'en',
    sortBy: 'publishedAt',
    sources: 'abc-news',
  }).done(function (newsResponse) {
    console.log('news: ', newsResponse);
    let newsSource0 = newsResponse.articles[0].source.name;
    let newsImage0 = newsResponse.articles[0].urlToImage;
    let newsTitle0 = newsResponse.articles[0].title;
    let newsURL0 = newsResponse.articles[0].url;
    let newsSource1 = newsResponse.articles[1].source.name;
    let newsImage1 = newsResponse.articles[1].urlToImage;
    let newsTitle1 = newsResponse.articles[1].title;
    let newsURL1 = newsResponse.articles[1].url;
    let newsSource2 = newsResponse.articles[2].source.name;
    let newsImage2 = newsResponse.articles[2].urlToImage;
    let newsTitle2 = newsResponse.articles[2].title;
    let newsURL2 = newsResponse.articles[2].url;
    let newsHTML = `
    <h4>Here are some news reports from ${userSelected}</h4>
    <div class="media border border-warning">
  <img class="mr-3" id="news-image"src="${newsImage0}" alt="News Image">
  <div class="media-body">
    <h5 class="mt-0">${newsSource0}</h5>
    <a href="${newsURL0}"><span>${newsTitle0}</span></a>
  </div>
</div>
<div class="media border border-warning">
<img class="mr-3" id="news-image"src="${newsImage1}" alt="News Image">
<div class="media-body">
  <h5 class="mt-0">${newsSource1}</h5>
  <a href="${newsURL1}"><span>${newsTitle1}</span></a>
</div>
</div>
<div class="media border border-warning">
<img class="mr-3" id="news-image"src="${newsImage2}" alt="News Image">
<div class="media-body">
  <h5 class="mt-0">${newsSource2}</h5>
  <a href="${newsURL2}"><span>${newsTitle2}</span></a>
</div>
</div>
`;
    $('#news-list').empty();
    $('#news-list').append(newsHTML);
  });
}

//-------------------------------------------------------------------------------------
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
</div>`;
  // <h6 class="weatherDate">${data.dt_txt}</h6>
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
  console.log('something');
} //
function renderMap() {
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
};
//----------------------------------------------------------------------------