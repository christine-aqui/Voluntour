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
            capCity = Malawi.capitalCity;
            console.log('City name: ', capCity);
            break;
            //
          case "Jordan":
            console.log('City name: ', Jordan.capitalCity);
            break;
            //
          case "Nepal":
            console.log('City name: ', Nepal.capitalCity);
            break;
            //
          case "Fiji":
            console.log('City name: ', Fiji.capitalCity);
            break;
            //
          case "Hawaii":
            console.log('City name: ', Hawaii.capitalCity);
            break;
            //
          case "Peru":
            console.log('City name: ', Peru.capitalCity);
            break;
            //
          case "Cambodia":
            console.log('City name: ', Cambodia.capitalCity);
            break;
            //
          case "India":
            console.log('City name: ', India.capitalCity);
            break;
            //
          case "Thailand":
            console.log('City name: ', Thailand.capitalCity);
            break;
            //
          case "Ecuador":
            console.log('City name: ', Ecuador.capitalCity);
            break;
            //
          case "Kenya":
            console.log('City name: ', Kenya.capitalCity);
            break;
            //
          case "Senegal":
            console.log('City name: ', Senegal.capitalCity);
            break;
            //
          case "Philippines":
            console.log('City name: ', Philippines.capitalCity);
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
            city: 'Toronto',
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