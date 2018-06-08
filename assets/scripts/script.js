console.log('connected');
var capCity = '';
var cityCode = '';
var cityStae = '';
var cityLat = 0;
var cityLon = 0;
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
    return capCity , cityCode, cityLat, cityLon, cityStae;
  }
  setTimeout(function () {
    $('#logo').show();
    $('#logo').addClass('animated fadeIn');
    //
    setTimeout(() => {
      $('.container').show();
      //
      document.querySelector('#formBtn').addEventListener('click', function (e) {
        e.preventDefault();
        //
        var userSelected = $('#region-list').val();
        console.log('user selected: ', userSelected);
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
        //
        var meetupURL = `https://cors.io/?https://api.meetup.com/2/open_events?`;

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
          console.log(response);
        // if(!response.results || !response.results.length){
        //   console.log(`did something ut got notting... life ruff in ${capCity}.`);
        // } else{
        //   console.log('meetup ', response);
        // }
        });
      });
    }, 400);
  }, 500);

  //
  //
  // Lisa's Code Here


  //
  //
  //



  // end of doc ready
});







// Meetup API
// $("#formBtn").on('click', function(e) {
//   // using the windows object location method
//   var urlParms = new URLSearchParams(window.location.search);
//   // using the URLSearchParams utility method
//   // URLSearchParams.get() Returns the first value associated to the given search parameter.
//   var regChoi = urlParms.get('region-choice');
//   // consol log what you got
//   console.log('User selected: ', regChoi);
//   //
//   //
//   var meetupURL = `https://cors.io/?https://api.meetup.com/2/open_events?`;
//   $.ajax({
//     url: meetupURL,
//     method: 'GET',
//     data: {
//       key: '116b73e106c122e802f104e7767213',
//       city: regChoi,
//       // country: 'CA',
//       category: 1, //hard coded temp
//       sign: 'true',
//     }
//   }).done(function (responce) {
//     console.log(meetupURL);
//     // console.log('meetup ', responce);
//   });


// });