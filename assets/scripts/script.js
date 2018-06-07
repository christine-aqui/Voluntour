console.log('connected');
var capCity = '';
var cityCode = '';
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
    cityCode = obj.countryCode2;
    cityLat = obj.lat;
    cityLon = obj.lon;
    return capCity , cityCode, cityLat, cityLon;
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
          cityInfo(Malawi);
            console.log('City name: ', capCity);
            break;
            //
          case "Jordan":
            cityInfo(Jordan);
            console.log('City name: ', capCity);
            break;
            //
          case "Nepal":
            cityInfo(Nepal);
            console.log('City name: ', capCity);
            break;
            //
          case "Fiji":
            cityInfo(Fiji);
            console.log('City name: ', capCity);
            break;
            //
          case "Hawaii":
            cityInfo(Hawaii);
            console.log('City name: ', capCity);
            break;
            //
          case "Peru":
            cityInfo(Peru);
            console.log('City name: ', capCity);
            break;
            //
          case "Cambodia":
            cityInfo(Cambodia);
            console.log('City name: ', capCity);
            break;
            //
          case "India":
            cityInfo(India);
            console.log('City name: ', capCity);
            break;
            //
          case "Thailand":
            cityInfo(Thailand);
            console.log('City name: ', capCity);
            break;
            //
          case "Ecuador":
            cityInfo(Ecuador);
            console.log('City name: ', capCity);
            break;
            //
          case "Kenya":
            cityInfo(Kenya);
            console.log('City name: ', capCity);
            break;
            //
          case "Senegal":
            cityInfo(Senegal);
            console.log('City name: ', capCity);
            break;
            //
          case "Philippines":
            cityInfo(Philippines);
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
            country: 'CA',
            category: 1, //hard coded temp
            sign: 'true',
          }
        }).done(function (response) {
          // console.log('meetup ', response);
        });
      });
    }, 400);
  }, 500);
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